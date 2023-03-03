import { AddArticle, DeleteArticle } from './Article.action';
import { Article } from './Article';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface StateArticle {
  panier: Article[];
}

@State<StateArticle>({
  name: 'panier',
  defaults: {
    panier: [],
  },
})
@Injectable()
export class ArticleState {
  @Selector()
  static getPanier(state: StateArticle) {
    return state.panier;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<StateArticle>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      panier: [...state.panier, payload],
    });
  }

  @Action(DeleteArticle)
  delete(
    { getState, patchState }: StateContext<StateArticle>,
    { payload }: DeleteArticle
  ) {
    const state = getState();
    patchState({
      panier: this.removeDocument(payload, state.panier),
    });
  }

  removeDocument(art: Article, state: Article[]) {
    state.forEach((a, index) => {
      if (a.name == art.name) {
        state.splice(index, 1);
      }
    });
    return state;
  }
}
