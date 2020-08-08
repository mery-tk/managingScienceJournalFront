import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {AuteurService} from '../../services/auteur.service';
import {Article} from '../../model/article.model';
import {Auteur} from '../../model/auteur.model';

@Component({
  selector: 'app-mes-articles',
  templateUrl: './mes-articles.component.html',
  styleUrls: ['./mes-articles.component.css']
})
export class MesArticlesComponent implements OnInit {

  articles: Array<Article> = new Array<Article>();
  auteur: Auteur = new Auteur();
  mode: number = 1;
etatArticle:string;
  processing:boolean;
  currentStep:number;
  constructor(private router: Router, private articleService: ArticleService, private auteurService: AuteurService) {

  }

  ngOnInit(): void {
    this.auteurService.getArticleAuteur(1).subscribe((data: any) => {
      this.articles = data as Array<Article>;
      console.log(data);
    }, error => console.log(error));
  }

  modifier(idArticle: number) {
    this.articleService.getArticleById(idArticle).subscribe(data => {
      let article = data as Article;
      if(article.etat=="En cours d'evaluation"){
        this.router.navigateByUrl("articles/"+idArticle);
      }else{
        alert("Vous n'avez pas le droit de modifier cet article, il est en cours d'evaluation.");
        this.router.navigateByUrl("mesArticles");
      }
    }, error => console.log(error));
  }

  supprimer(article: Article) {
    const confirm = window.confirm('etes-vous sur de vouloir supprimer cet Article??');
    if (confirm == true) {
      this.articleService.daleteArticle(article.idArticle)
        .subscribe(data => {
          this.articles.splice(this.articles.indexOf(article), 1);
        }, error => {
          console.log(error);
        });
    }
  }

  goDetails(idArticle: number) {
    this.router.navigateByUrl("articles/"+idArticle+"/details");
  }

  suivreEtat(idArticle:number){
this.mode=2;
this.articleService.getArticleById(idArticle).subscribe(data=>{
  let article = data as Article;
  console.log(article);
  if(article.etat=="recent") {
    this.processing = true;

     setTimeout(()=>{
    this.currentStep = 0;
    this.processing = false;
     this.processing=false
  },150);
  }
  if(article.etat=="En cours d'evaluation par Comite") {
    this.processing = true;

    setTimeout(()=>{
      this.currentStep = 1;
      this.processing = false;
      this.processing=false
    },150);
  }
  if(article.etat=="En cours d'evaluation par Referees") {
    this.processing = true;

    setTimeout(()=>{
      this.currentStep = 2;
      this.processing = false;
      this.processing=false
    },150);
  }
  if(article.etat=="Accepté") {
    this.processing = true;

    setTimeout(()=>{
      this.currentStep = 3;
      this.processing = false;
      this.processing=false
    },150);
  }

  }


);

  }

}
