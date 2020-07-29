import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../model/article.model';
import {Auteur} from '../../model/auteur.model';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  idArticle: number;
  article: Article = new Article();
  file: any;
  auteur: Auteur = new Auteur();
  co_auteurs = new Array<Auteur>();
  corresp: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
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

  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }
}
