import { Component, OnInit } from '@angular/core';
import {Article} from '../../model/article.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  mode: number = 1;
  article: Article = new Article();
  idArticle: number;
  file: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private articleService: ArticleService, private authenticationService: AuthenticationService) {
    this.idArticle = activatedRoute.snapshot.params.idArticle;
  }

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      this.articleService.getArticleById(this.idArticle).subscribe(data => {
        this.article = data as Article;
        this.getFile();
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }

  }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.file = file;
  }

  modifierArticle(article: Article) {
    const uploadData = new FormData();
    uploadData.append('file', this.file, this.file.name);
    uploadData.append('article', JSON.stringify(article));
    this.articleService.updateArticle(this.idArticle, uploadData)
      .subscribe(data => {
        this.article = data as Article;
        this.mode = 2;
        console.log("ok");
      }, error => {
        console.log(error);
      });
  }

  getFile() {
    this.articleService.getFile(this.idArticle).subscribe(data =>{
      console.log(data)
      this.file = data;
    }, error => console.log(error));
  }

  logout(){
    this.authenticationService.logout();
  }

}
