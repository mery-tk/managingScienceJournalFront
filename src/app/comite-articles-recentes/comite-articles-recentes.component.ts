import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-comite-articles-recentes',
  templateUrl: './comite-articles-recentes.component.html',
  styleUrls: ['./comite-articles-recentes.component.css']
})
export class ComiteArticlesRecentesComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();
  articles1: Array<Article> = new Array<Article>();

  pages: any;
  currentPage: number = 0;
  size = 4;


  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (data: any) => {
      for(let a of data){
        if(a.etat=="recent"){
          this.articles1.push(a) ;
        }
      }
      this.articles=this.articles1;
      console.log(data);
      console.log(this.articles);
    }, error => console.log(error));
  }


  goToPage(i: number) {

  }
}

