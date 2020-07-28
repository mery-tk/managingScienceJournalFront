import { Component, OnInit } from '@angular/core';
import {Article} from '../../model/article.model';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
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

  modifier(idArticle: any) {

  }

  supprimer(article: Article) {

  }

  goToPage(i: number) {

  }
}
