import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { ListeArticlesComponent } from './Auteur/liste-articles/liste-articles.component';
import {ArticleService} from './services/article.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ArticleService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
