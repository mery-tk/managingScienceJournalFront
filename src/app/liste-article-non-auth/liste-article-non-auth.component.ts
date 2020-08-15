import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuthenticationService} from "../services/authentication.service";
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-liste-article-non-auth',
  templateUrl: './liste-article-non-auth.component.html',
  styleUrls: ['./liste-article-non-auth.component.css']
})
export class ListeArticleNonAuthComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();
  articles1: Array<Article> = new Array<Article>();
  pages: any;
  currentPage: number = 0;
  size = 4;


  constructor(private router: Router, private articleService: ArticleService,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    let token = this.authenticationService.loadToken();
    if(token) {
      this.articleService.getArticles().subscribe((data: any) => {
        this.articles1=data
        for(let a of this.articles1){
          if(a.etat="Accepté"){
            this.articles.push(a);
          }
        }
        console.log(data);
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }
  }



  goToPage(i: number) {

  }
  Deconnecter(){
    this.authenticationService.logout();
  }
}

