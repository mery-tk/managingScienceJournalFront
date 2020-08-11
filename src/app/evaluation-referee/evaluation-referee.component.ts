import { Component, OnInit } from '@angular/core';
import {EvaluationReferee} from "../model/evaluationReferee.model";
import {EvaluationRefereeService} from "../services/evaluationReferee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evaluation-referee',
  templateUrl: './evaluation-referee.component.html',
  styleUrls: ['./evaluation-referee.component.css']
})
export class EvaluationRefereeComponent implements OnInit {

  evaluation:EvaluationReferee=new EvaluationReferee();
  mode:number=1;
  idArticle:number;

  constructor(public evaluationRefereeService :EvaluationRefereeService,private activatedRoute: ActivatedRoute) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
  }


  saveEvaluation(){
    this.evaluationRefereeService.evaluerParReferee(this.idArticle,this.evaluation, 3)
      .subscribe((data: any)=>{
        this.evaluation=data;
        this.mode = 2;
        console.log(this.idArticle);
      },err=>{
        console.log(err);
      })

  }
}
