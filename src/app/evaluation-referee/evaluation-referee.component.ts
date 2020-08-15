import { Component, OnInit } from '@angular/core';
import {EvaluationReferee} from "../model/evaluationReferee.model";
import {EvaluationRefereeService} from "../services/evaluationReferee.service";
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Utilisateur} from '../model/utilisateur.model';
import {Article} from '../model/article.model';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-evaluation-referee',
  templateUrl: './evaluation-referee.component.html',
  styleUrls: ['./evaluation-referee.component.css']
})
export class EvaluationRefereeComponent implements OnInit {

  evaluation:EvaluationReferee=new EvaluationReferee();
  mode:number=1;
  idArticle:number;
  user: Utilisateur = new Utilisateur();

  constructor(public evaluationRefereeService :EvaluationRefereeService,private activatedRoute: ActivatedRoute,
              private router: Router, private authenticationService: AuthenticationService, private utilisateurService: UtilisateurService) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      let username = localStorage.getItem("us");
      this.utilisateurService.getUserByUsername(username).subscribe(data => {
        this.user = data as Utilisateur;
        console.log(this.user);
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }
  }


  saveEvaluation(){
    console.log(this.user.idUtilisateur)
    this.evaluationRefereeService.evaluerParReferee(this.idArticle,this.evaluation, this.user.idUtilisateur)
      .subscribe((data: any)=>{
        this.evaluation=data;
        this.mode = 2;
        console.log(this.idArticle);
      },err=>{
        console.log(err);
      });
  }

  logout(){
    this.authenticationService.logout();
  }

}
