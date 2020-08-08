import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { ListeArticlesComponent } from './Article/liste-articles/liste-articles.component';
import {ArticleService} from './services/article.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DetailsArticleComponent } from './Article/details-article/details-article.component';
import { AjouterArticleComponent } from './Article/ajouter-article/ajouter-article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {AuteurService} from './services/auteur.service';
import { MesArticlesComponent } from './Auteur/mes-articles/mes-articles.component';
import { ModifierArticleComponent } from './Article/modifier-article/modifier-article.component';
import { ArticlesAEvaluerComponent } from './Auteur/articles-aevaluer/articles-aevaluer.component';
import {RefereeService} from './services/referee.service';
import { DetailsArticlesAEvaluerComponent } from './Auteur/details-articles-aevaluer/details-articles-aevaluer.component';
import { InfoReduitArticleComponent } from './info-reduit-article/info-reduit-article.component';
import { InfoReduitAuteurComponent } from './info-reduit-auteur/info-reduit-auteur.component';
import { FormulInscriptionComponent } from './formul-inscription/formul-inscription.component';
import {UtilisateurService} from "./services/utilisateur.service";
import { ListeArticleNonAuthComponent } from './liste-article-non-auth/liste-article-non-auth.component';
import { DetailsArticleNonAuthComponent } from './details-article-non-auth/details-article-non-auth.component';
import { ComiteArticlesRecentesComponent } from './comite-articles-recentes/comite-articles-recentes.component';
import { ComiteArticlesEncourComponent } from './comite-articles-encour/comite-articles-encour.component';
import { DetailsArticlRecentComponent } from './details-articl-recent/details-articl-recent.component';
import { ComiteListArticlesComponent } from './comite-list-articles/comite-list-articles.component';
import { ComiteListArticlesDetailsComponent } from './comite-list-articles-details/comite-list-articles-details.component';
import {MatStepperModule} from "@angular/material/stepper";
import { EvaluationRefereeComponent } from './evaluation-referee/evaluation-referee.component';
import {EvaluationRefereeService} from "./services/evaluationReferee.service";

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    DetailsArticleComponent,
    AjouterArticleComponent,
    MesArticlesComponent,
    ModifierArticleComponent,
    ArticlesAEvaluerComponent,
    DetailsArticlesAEvaluerComponent,
    InfoReduitArticleComponent,
    InfoReduitAuteurComponent,
    FormulInscriptionComponent,
    ListeArticleNonAuthComponent,
    DetailsArticleNonAuthComponent,
    ComiteArticlesRecentesComponent,
    ComiteArticlesEncourComponent,
    DetailsArticlRecentComponent,
    ComiteListArticlesComponent,
    ComiteListArticlesDetailsComponent,
    EvaluationRefereeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    MatStepperModule,
  ],
  providers: [
    ArticleService,
    HttpClient,
    AuteurService,
    RefereeService,
    UtilisateurService,
    EvaluationRefereeService,
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
