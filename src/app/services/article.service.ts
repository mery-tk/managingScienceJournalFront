import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article.model';
import {Referee} from '../model/referee.model';

@Injectable()
export class ArticleService {
  constructor(private  http: HttpClient) { }

  getArticles(){
    return this.http.get('http://localhost:8080/articles');
  }

  addArticle(article: FormData) {
    return this.http.post('http://localhost:8080/articles', article);
  }

  updateArticle(idArticle: number, article: FormData) {
    return this.http.put('http://localhost:8080/articles/'+idArticle, article);
  }

  daleteArticle(idArticle: number){
    return this.http.delete('http://localhost:8080/articles/'+idArticle);
  }

  getArticleById(idArticle: number) {
    return this.http.get('http://localhost:8080/articles/'+idArticle);
  }

  getFile(idArticle: number) {
    return this.http.get('http://localhost:8080/article/'+idArticle, {responseType: "blob"});
  }


  getAuteursArticle(idArticle: number) {
    return this.http.get('http://localhost:8080/articles/'+idArticle+'/auteurs');
  }

  getCorrespondanceAuteurArticle(idArticle: number, idAuteur: number) {
    return this.http.get('http://localhost:8080/correspondance/'+idArticle+'/'+idAuteur);
  }


  chercherArticleParMotCle(motCle:string,page:number,size:number){
    return this.http.get('http://localhost:8080/chercherArticles?mc='+motCle+'&size='+size+'&page='+page);

  }

  chercherArticleParAuteur(aut:string){
    return this.http.get('http://localhost:8080/chercherArticlesParAuteur?aut='+aut);
  }
  affecterRefereeArticle(idArticle: number, referees:Array<Referee>){
    return this.http.put('http://localhost:8080/ajouterRefereeArticle/'+idArticle, referees);
  }

  trouverRefereePourArticle(idArticle: number) {
    return this.http.get('http://localhost:8080/auteursNonReferee/'+idArticle);
  }

  evaluationComiteArticle(idArticle: number, qualification: string){
    return this.http.put('http://localhost:8080/articles/'+idArticle+'/evaluationComite/', qualification);
  }

}
