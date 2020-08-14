import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuteurService} from '../services/auteur.service';
import {Auteur} from '../model/auteur.model';
import {AuthenticationService} from '../services/authentication.service';
import {JwtHelper} from 'angular2-jwt';

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
  authenticated: boolean = false;
  roles: Array<any>;
  jwtHelper=new JwtHelper();
  comite: boolean;

  constructor(private router: Router, private articleService: ArticleService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let token = this.authenticationService.loadToken();
    if(token){
      this.authenticated = true;
      this.roles=this.jwtHelper.decodeToken(token).roles;
      for (let role of this.roles) {
        if(role.authority=="AUTEUR"){
          this.comite = false;
        }else if (role.authority=="COMITE"){
          this.comite = true;
        }
      }
    }
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


  logout() {
    this.authenticationService.logout();
  }

  getInfos(idArticle: number) {
    if(this.authenticated){
      this.router.navigateByUrl("/home/"+idArticle+"/auteurs");
    }else {
      this.router.navigateByUrl("/inscription");
    }
  }
}
