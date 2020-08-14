import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeArticlesComponent} from './Article/liste-articles/liste-articles.component';
import {AppComponent} from './app.component';
import {DetailsArticleComponent} from './Article/details-article/details-article.component';
import {AjouterArticleComponent} from './Article/ajouter-article/ajouter-article.component';
import {MesArticlesComponent} from './Auteur/mes-articles/mes-articles.component';
import {ModifierArticleComponent} from './Article/modifier-article/modifier-article.component';
import {ArticlesAEvaluerComponent} from './Auteur/articles-aevaluer/articles-aevaluer.component';
import {DetailsArticlesAEvaluerComponent} from './Auteur/details-articles-aevaluer/details-articles-aevaluer.component';
import {InfoReduitArticleComponent} from "./info-reduit-article/info-reduit-article.component";
import {InfoReduitAuteurComponent} from "./info-reduit-auteur/info-reduit-auteur.component";
import {FormulInscriptionComponent} from "./formul-inscription/formul-inscription.component";
import {ListeArticleNonAuthComponent} from "./liste-article-non-auth/liste-article-non-auth.component";
import {DetailsArticleNonAuthComponent} from "./details-article-non-auth/details-article-non-auth.component";
import {ComiteListArticlesComponent} from "./comite-list-articles/comite-list-articles.component";
import {ComiteListArticlesDetailsComponent} from "./comite-list-articles-details/comite-list-articles-details.component";
import {ComiteArticlesEncourComponent} from "./comite-articles-encour/comite-articles-encour.component";
import {ComiteArticlesRecentesComponent} from "./comite-articles-recentes/comite-articles-recentes.component";
import {DetailsArticlRecentComponent} from "./details-articl-recent/details-articl-recent.component";
import {EvaluationComiteComponent} from './evaluation-comite/evaluation-comite.component';
import {EvaluationRefereeComponent} from "./evaluation-referee/evaluation-referee.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},//
  {path: 'articles', component: ListeArticlesComponent},//
  {path: 'articles/:idArticle/details', component: DetailsArticleComponent},//
  {path: 'home/:idArticle/auteurs',component:InfoReduitAuteurComponent},//
  {path: 'articlesAEvaluer/:idArticle/details', component: DetailsArticlesAEvaluerComponent},
  {path: 'listeArticles/:idArticle/details', component:ComiteListArticlesDetailsComponent},
  {path: 'ArticlesEnCours/:idArticle/details',component: ComiteListArticlesDetailsComponent},
  {path: 'articlesRecentes/:idArticle/details',component: DetailsArticlRecentComponent},
  {path: 'articles/:idArticle', component: ModifierArticleComponent},
  {path: 'addArticle', component: AjouterArticleComponent},
  {path: 'mesArticles', component: MesArticlesComponent},//
  {path: 'articlesAEvaluer', component: ArticlesAEvaluerComponent},
  {path: 'inscription', component: FormulInscriptionComponent},//
  {path: 'home', component: InfoReduitArticleComponent},//
  {path: 'utilisateur/articles', component: ListeArticleNonAuthComponent},//
  {path: 'listeArticles' , component: ComiteListArticlesComponent},//
  {path: 'ArticlesEnCours',component: ComiteArticlesEncourComponent},
  {path:'articlesRecentes',component: ComiteArticlesRecentesComponent},
  {path: 'utilisateur/articles/:idArticle/details',component:DetailsArticleNonAuthComponent},//
  {path:"articles/:idArticle/evaluationComite", component: EvaluationComiteComponent},//
  {path:"articlesAEvaluer/:idArticle/evaluationReferee", component: EvaluationRefereeComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
