import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from '../home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';

const childRoutes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'home', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'article/:titre', component: DetailsComponent },
];

@NgModule({
  declarations: [
    PanierComponent,
    DetailsComponent,
    CatalogueComponent,
    HomeComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(childRoutes),
  ],
})
export class StoreModule {}
