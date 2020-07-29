import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Referee} from '../model/referee.model';

@Injectable()
export class RefereeService {
  constructor(private  http: HttpClient) { }

  getReferees(){
    return this.http.get('http://localhost:8080/referees');
  }

  addReferee(referee: Referee) {
    return this.http.post('http://localhost:8080/referees', referee);
  }

  updateReferee(idReferee: number, referee: Referee) {
    return this.http.put('http://localhost:8080/referees/'+idReferee, referee);
  }

  daleteReferee(idReferee: number){
    return this.http.delete('http://localhost:8080/referees/'+idReferee);
  }

  getAuteurById(idAuteur: number) {
    return this.http.get('http://localhost:8080/referees/'+idAuteur);
  }

  getArticleAEvaluer(idReferee: number) {
    return this.http.get('http://localhost:8080/referees/'+idReferee+'/articles');
  }

}
