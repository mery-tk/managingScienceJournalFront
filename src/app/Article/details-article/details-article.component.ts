import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../model/article.model';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  idArticle: number;
  article: Article = new Article();
  file: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
    this.articleService.getArticleById(this.idArticle).subscribe(data => {
      this.article = data as Article;
      console.log(data);
    }, error => console.log(error));
  }

  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }
}
