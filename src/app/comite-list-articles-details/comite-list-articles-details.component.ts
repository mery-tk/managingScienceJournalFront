import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Auteur} from "../model/auteur.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-comite-list-articles-details',
  templateUrl: './comite-list-articles-details.component.html',
  styleUrls: ['./comite-list-articles-details.component.css']
})
export class ComiteListArticlesDetailsComponent implements OnInit {

  idArticle: number;
  article: Article = new Article();
  file: any;
  auteur: Auteur = new Auteur();
  co_auteurs = new Array<Auteur>();
  corresp: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private articleService: ArticleService, private authenticationService: AuthenticationService) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      this.articleService.getArticleById(this.idArticle).subscribe(data => {
        this.article = data as Article;
        this.articleService.getAuteursArticle(this.idArticle).subscribe((data: any) => {
          let auteurs = data;
          console.log(data)
          for (let auteur1 of auteurs) {
            this.articleService.getCorrespondanceAuteurArticle(this.idArticle, auteur1.idUtilisateur).subscribe(data => {
              this.corresp = data as boolean;
              if(this.corresp == true){
                this.auteur = auteur1;
              }else{
                this.co_auteurs.push(auteur1);
              }
            }, error => console.log(error));
          }
        }, error => console.log(error));
        console.log(data);
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }



  }

  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }

  goEvaluate() {
    this.router.navigateByUrl("articles/"+this.idArticle+"/evaluationComite");
  }

  logout(){
    this.authenticationService.logout();
  }

}
