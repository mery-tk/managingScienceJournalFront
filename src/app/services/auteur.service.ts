import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article.model';
import {Auteur} from '../model/auteur.model';

@Injectable()
export class AuteurService {
  constructor(private  http: HttpClient) { }

  getAuteurs(){
    return this.http.get('http://localhost:8080/auteurs');
  }

  addAuteur(auteur: Auteur) {
    return this.http.post('http://localhost:8080/auteurs', auteur);
  }

  updateAuteur(idAuteur: number, auteur: Auteur) {
    return this.http.put('http://localhost:8080/auteurs/'+idAuteur, auteur);
  }

  daleteAuteur(idAuteur: number){
    return this.http.delete('http://localhost:8080/auteurs/'+idAuteur);
  }

  getAuteurById(idAuteur: number) {
    return this.http.get('http://localhost:8080/auteurs/'+idAuteur);
  }

  getArticleAuteur(idAuteur: number) {
    return this.http.get('http://localhost:8080/auteurs/'+idAuteur+'/articles');
  }

}
