import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Article } from 'src/app/_Classe/Article';
import { DeleteArticle } from 'src/app/_Classe/Article.action';
import { LogServiceService } from '../../_Services/log-service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  panier: Article[] = [];

  constructor(
    private store: Store,
    public logServiceService: LogServiceService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.panier.panier)
      .subscribe((art) => {
        this.panier = art as Article[];
      });
  }

  deleteArt(art: Article) {
    //DeleteArticle
    this.store.dispatch(new DeleteArticle(art));
    alert('article supprimé du panier');
    this.logServiceService.rmArticle();
  }
}
