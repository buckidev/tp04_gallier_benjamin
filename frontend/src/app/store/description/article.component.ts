import { Component, OnInit } from '@angular/core';
import { Article } from '../../_Classe/Article';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../_Services/http-service.service';
import { Store } from '@ngxs/store';
import { AddArticle } from 'src/app/_Classe/Article.action';
import { LogServiceService } from '../../_Services/log-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = new Article('', 0, '');

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpServiceService,
    private store: Store,
    public logServiceService: LogServiceService
  ) {
    this.article.name = this.route.snapshot.params.titre;
    this.httpService.getData().then((data: any) => {
      data.map((d: any) => {
        if (d.title == this.article.name) {
          this.article.price = d.price;
          this.article.description = d.description;
        }
      });
    });
  }

  ngOnInit(): void {}

  addPanier() {
    console.log(this.article);
    var present = false;
    this.store
      .select((state) => state.panier.panier)
      .subscribe((arti) => {
        var panier = arti as Article[];
        panier.forEach((a) => {
          if (a.name == this.article.name) {
            present = true;
          }
        });
      });
    if (present) {
      alert('Article déjà présent dans le panier');
    } else {
      this.store.dispatch(new AddArticle(this.article));
      this.logServiceService.addArticle();
      alert('Article ajouté au panier');
    }
  }
}
