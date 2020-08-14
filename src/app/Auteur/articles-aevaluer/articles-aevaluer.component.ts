import { Component, OnInit } from '@angular/core';
import {Article} from '../../model/article.model';
import {Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {AuteurService} from '../../services/auteur.service';
import {RefereeService} from '../../services/referee.service';
import {EvaluationRefereeService} from "../../services/evaluationReferee.service";
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-articles-aevaluer',
  templateUrl: './articles-aevaluer.component.html',
  styleUrls: ['./articles-aevaluer.component.css']
})
export class ArticlesAEvaluerComponent implements OnInit {

  articles: Array<Article> = new Array<Article>();
  article: Article = new Article();
  mode:number=1;
  constructor(private router: Router, private articleService: ArticleService,
              private refereeService: RefereeService,private evaluationRefereeService:EvaluationRefereeService,
              private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      this.refereeService.getArticleAEvaluer(5).subscribe((data: any) => {
        this.articles = data as Array<Article>;
        console.log(data);
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }

  }

  goDetails(idArticle: number) {
    this.router.navigateByUrl("articlesAEvaluer/"+idArticle+"/details");
  }

  evaluerArticle(idArticle:number){
//id Referee Connecté je vais mettre idReferee=5 par exemple
    //this.evaluationRefereeService
    this.router.navigateByUrl("articlesAEvaluer/"+idArticle+"/evaluationReferee");
  }

  logout(){
    this.authenticationService.logout();
  }

}
