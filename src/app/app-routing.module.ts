import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeArticlesComponent} from './Article/liste-articles/liste-articles.component';
import {AppComponent} from './app.component';
import {DetailsArticleComponent} from './Article/details-article/details-article.component';
import {AjouterArticleComponent} from './Article/ajouter-article/ajouter-article.component';
import {MesArticlesComponent} from './Auteur/mes-articles/mes-articles.component';
import {ModifierArticleComponent} from './Article/modifier-article/modifier-article.component';


const routes: Routes = [
  {path: 'articles', component: ListeArticlesComponent},
  {path: 'home', component: AppComponent},
  {path: 'articles/:idArticle/details', component: DetailsArticleComponent},
  {path: 'articles/:idArticle', component: ModifierArticleComponent},
  {path: 'addArticle', component: AjouterArticleComponent},
  {path: 'mesArticles', component: MesArticlesComponent},
  //{path: 'articlesAEvaluer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
