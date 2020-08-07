import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-info-reduit-article',
  templateUrl: './info-reduit-article.component.html',
  styleUrls: ['./info-reduit-article.component.css']
})
export class InfoReduitArticleComponent implements OnInit {

  articles: Array<Article> = new Array<Article>();
  currentPage: number = 0;
   pageArticles:any;
  motCle:string="";
  size:number=5;
  pages:Array<number>;
 mode: number = 1;
  autr:string;
  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (data: any) => {
      this.articles = data;
      console.log(data);
    }, error => console.log(error));
  }

  chercher(){
	   this.mode=2;
	     this.articleService.chercherArticleParMotCle(this.motCle,this.currentPage,this.size)
      .subscribe(data =>{
        this.pageArticles=data;
        // @ts-ignore
        this.pages=new Array(data.totalPages);
      },error => {console.log(error);})

  }

  onDetailsAuteur(idArticle: any) {
    this.router.navigateByUrl("infoArticleAuteur/"+idArticle);
  }

  goToPage(i: number) {
 this.currentPage=i;
    this.chercher();
  }

  chercherParAuteur(){
this.articleService.chercherArticleParAuteur(this.autr).subscribe( (data: any) => {
  this.articles = data;
  console.log(data);
}, error => console.log(error));
  }


}
