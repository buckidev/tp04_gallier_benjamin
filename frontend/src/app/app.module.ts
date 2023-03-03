import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LogServiceService } from './_Services/log-service.service';
import { NgxsModule } from '@ngxs/store';
import { ArticleState } from './_Classe/Article.state';

const appRoutes: Routes = [
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  //{ path: 'store',loadChildren: () => import('./store/store.module').then(m => m.StoreModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ArticleState]),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LogServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
