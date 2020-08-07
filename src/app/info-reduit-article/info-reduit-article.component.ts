import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuteurService} from '../services/auteur.service';
import {Auteur} from '../model/auteur.model';

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
  aut:string = "";
  auteur: Array<Auteur> = new Array<Auteur>();
  co_auteurs: Array<Array<Auteur>> = new Array<Array<Auteur>>();
  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.chercher("");
  }

  chercher(motCle: string){
	     this.articleService.chercherArticleParMotCle(motCle,this.currentPage,this.size)
      .subscribe(data =>{
        this.pageArticles=data;
         this.articles = this.pageArticles?.content;
        for (let article of this.articles) {
          this.co_auteurs[article.idArticle] = new Array<Auteur>()
          this.articleService.getAuteursArticle(article.idArticle).subscribe((data: any) => {
            let auteurs = data;
            console.log(data);
            for (let auteur1 of auteurs) {
              this.articleService.getCorrespondanceAuteurArticle(article.idArticle, auteur1.idUtilisateur).subscribe((data: any) => {
                let cor = data
                if(cor == true){
                  this.auteur[article.idArticle] = auteur1;
                }else{
                  this.co_auteurs[article.idArticle].push(auteur1);
                }
              }, error => console.log(error));
            }
          }, error => console.log(error));
        }
        // @ts-ignore
        this.pages=new Array(data.totalPages);
      },error => {console.log(error);})

  }

  onDetailsAuteur(idArticle: any) {
    this.router.navigateByUrl("infoArticleAuteur/"+idArticle);
  }

  goToPage(i: number) {
 this.currentPage=i;
    this.chercher(this.motCle);
  }

  chercherParAuteur(){
    if(this.aut==""){
      this.chercher("");
    }else{
      this.articleService.chercherArticleParAuteur(this.aut).subscribe( (data: any) => {
        this.articles = data;
        console.log(data);
      }, error => console.log(error));
    }
  }


}
