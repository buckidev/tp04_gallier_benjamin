import { Article } from './Article';

export class AddArticle {
  static readonly type = '[Article] Add article';

  constructor(public payload: Article) {}
}

export class DeleteArticle {
  static readonly type = '[Article] Delete article';

  constructor(public payload: Article) {}
}
