import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EvaluationReferee} from "../model/evaluationReferee.model";
import {Auteur} from "../model/auteur.model";

@Injectable()
export class EvaluationRefereeService {
  constructor(private  http: HttpClient) { }


  evaluerParReferee(idArticle: number,evaluationReferee:EvaluationReferee, idReferee: number){
    return this.http.post('http://localhost:8080/articles/'+idArticle+'/evaluationReferee/'+idReferee, evaluationReferee);
  }


  saveEvaluationReferee(evaluationReferee:EvaluationReferee) {
    return this.http.post('http://localhost:8080/evaluationReferees', evaluationReferee);
  }

}
