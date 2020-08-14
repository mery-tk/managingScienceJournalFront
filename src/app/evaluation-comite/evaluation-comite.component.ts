import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../services/article.service';
import {AuteurService} from '../services/auteur.service';
import {Article} from '../model/article.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-evaluation-comite',
  templateUrl: './evaluation-comite.component.html',
  styleUrls: ['./evaluation-comite.component.css']
})
export class EvaluationComiteComponent implements OnInit {
  qualification: string;
  idArticle:number;
  article: Article = new Article();

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService,
              private authenticationService: AuthenticationService, private router: Router) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      this.articleService.getArticleById(this.idArticle).subscribe(data => {
        this.article = data as Article;
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }

  }

  evaluationComite() {
    console.log(this.qualification);
    this.articleService.evaluationComiteArticle(this.idArticle, this.qualification).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  logout(){
    this.authenticationService.logout();
  }

}
