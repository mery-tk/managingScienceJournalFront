import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article.model';

@Injectable()
export class ArticleService {
  constructor(private  http: HttpClient) { }

  getArticles(){
    return this.http.get('http://localhost:8080/articles');
  }

  addArticle(article: Article) {
    return this.http.post('http://localhost:8080/articles', article);
  }

  updateArticle(idArticle: number, article: Article) {
    return this.http.put('http://localhost:8080/articles/'+idArticle, article);
  }

  daleteArticle(idArticle: number){
    return this.http.delete('http://localhost:8080/articles/'+idArticle);
  }

  getArticleById(idArticle: number) {
    return this.http.get('http://localhost:8080/articles/'+idArticle);
  }

}
