import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-liste-article-non-auth',
  templateUrl: './liste-article-non-auth.component.html',
  styleUrls: ['./liste-article-non-auth.component.css']
})
export class ListeArticleNonAuthComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();
  pages: any;
  currentPage: number = 0;
  size = 4;


  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (data: any) => {
      this.articles = data;
      console.log(data);
    }, error => console.log(error));
  }



  goToPage(i: number) {

  }
}

