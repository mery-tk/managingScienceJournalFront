import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Auteur} from "../model/auteur.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuteurService} from "../services/auteur.service";
import {Referee} from '../model/referee.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-details-articl-recent',
  templateUrl: './details-articl-recent.component.html',
  styleUrls: ['./details-articl-recent.component.css']
})
export class DetailsArticlRecentComponent implements OnInit {

  idArticle: number;
  id:number;
  article: Article = new Article();
  file: any;
  auteur: Auteur = new Auteur();
  co_auteurs = new Array<Auteur>();
  corresp: boolean;
  arts: Array<Article> = new Array<Article>();
  mode: number = 1;
  referees:Array<Auteur>=new Array<Auteur>();
  selectedReferees:Array<Referee>=new Array<Referee>();

  ref:Auteur=new Auteur();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService,
              private articleService: ArticleService, private auteurService:AuteurService) {
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


  RefuserArticle(article: Article) {
    const confirm = window.confirm('etes-vous sur de vouloir refuser cet Article??');
    if (confirm == true) {
     article.etat="Refuse";
    }
  }

  AccepterArticle(idArticle: any){
    this.mode=2;
    this.id=idArticle;
    this.articleService.trouverRefereePourArticle(idArticle).subscribe((data: any) => {
      this.referees = data;
    }, error => console.log(error));


  }

  affecter(){
    this.articleService.affecterRefereeArticle(this.idArticle, this.selectedReferees).subscribe(data =>{
      console.log(data);
      this.router.navigateByUrl("/articlesRecentes");
    }, error => console.log(error));
  }



  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }

  logout() {
    this.authenticationService.logout();
  }
}
