import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {Auteur} from "../model/auteur.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../services/article.service";
import {AuteurService} from "../services/auteur.service";
import {Referee} from '../model/referee.model';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private articleService: ArticleService,
              private auteurService:AuteurService) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;

  }

  ngOnInit(): void {
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

  }


  RefuserArticle(article: Article) {
    const confirm = window.confirm('etes-vous sur de vouloir refuser et alors supprimer cet Article??');
    if (confirm == true) {
      this.articleService.daleteArticle(article.idArticle)
        .subscribe(data => {
          this.arts.splice(this.arts.indexOf(article), 1);
        }, error => {
          console.log(error);
        });
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
    this.mode=1;
    console.log(this.selectedReferees);
    this.articleService.affecterRefereeArticle(this.idArticle, this.selectedReferees).subscribe(data =>{
      console.log(data)
    }, error => console.log(error));
  }



  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }
}
