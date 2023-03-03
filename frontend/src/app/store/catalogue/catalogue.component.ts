import { Component, OnInit, ViewChild } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { LogServiceService } from '../../_Services/log-service.service';
//import { Catalogue } from '../_Classe/Catalogue';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  @ViewChild(ListProductComponent) ListProduct:
    | ListProductComponent
    | undefined;
  constructor(public logServiceService: LogServiceService) {}
  titreFilter: string = '';
  priceFilter: number | undefined;

  ngOnInit(): void {
    console.log(this.logServiceService.CurrentLog);
  }

  onInputChangeTitre(value: any) {
    //console.log(value);
    this.titreFilter = value;
    this.ListProduct?.filter(this.priceFilter, value);
  }

  onInputChangePrice(value: any) {
    //console.log(value);
    this.priceFilter = value;
    this.ListProduct?.filter(value, this.titreFilter);
  }
}
