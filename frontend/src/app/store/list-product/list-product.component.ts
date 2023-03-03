import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from '../../_Services/http-service.service';
import { Article } from '../../_Classe/Article';
import { Store } from '@ngxs/store';
import { AddArticle } from '../../_Classe/Article.action';
import { LogServiceService } from '../../_Services/log-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  article: Article[] = [];
  articleDisplayed: Article[] = [];
  constructor(
    private httpService: HttpServiceService,
    private store: Store,
    public logServiceService: LogServiceService
  ) {}
  title = 'TP3';

  ngOnInit() {
    this.httpService
      .getData()
      .then((data: any) => {
        data.map((d: any) => {
          this.article.push(new Article(d.name, d.price, d.description));
        });
      })
      .then(() => {
        this.articleDisplayed = this.article;
      });
  }

  filter(valuePrice: number | undefined, valueTitre: string) {
    this.articleDisplayed = [];
    this.article.map((Article) => {
      if (
        valuePrice != undefined &&
        valuePrice != null &&
        Article.price > valuePrice
      ) {
      } else {
        if (valueTitre == '' || Article.name.includes(valueTitre)) {
          this.articleDisplayed.push(Article);
        } else {
        }
      }
    });
  }

  addPanier(art: Article) {
    console.log(art);
    var present = false;
    this.store
      .select((state) => state.panier.panier)
      .subscribe((arti) => {
        var panier = arti as Article[];
        panier.forEach((a) => {
          if (a.name == art.name) {
            present = true;
          }
        });
      });
    if (present) {
      alert('Article déjà présent dans le panier');
    } else {
      this.store.dispatch(new AddArticle(art));
      this.logServiceService.addArticle();
      alert('Article ajouté au panier');
    }
  }
}
