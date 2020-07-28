import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeArticlesComponent} from './Article/liste-articles/liste-articles.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'articles', component: ListeArticlesComponent},
  {path: 'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
