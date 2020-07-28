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

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    DetailsArticleComponent,
    AjouterArticleComponent,
    MesArticlesComponent,
    ModifierArticleComponent
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
  ],
  providers: [
    ArticleService,
    HttpClient,
    AuteurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
