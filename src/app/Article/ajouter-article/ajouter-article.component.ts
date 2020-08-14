import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../model/article.model';
import {Auteur} from '../../model/auteur.model';
import {AuteurService} from '../../services/auteur.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  mode: number = 1;
  file: any;
  article: Article = new Article();
  auteurs: Array<Auteur> = new Array<Auteur>();

  constructor(private articleService: ArticleService, private router: Router,
              private auteurService: AuteurService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let jwt = this.authenticationService.loadToken();
    if (jwt){
      this.auteurService.getAuteurs().subscribe((data: any) => {
        this.auteurs = data;
      }, error => console.log(error));
    }else{
      this.router.navigateByUrl("/home");
    }


  }

  ajouterArticle(article: any) {
    const uploadData = new FormData();
    console.log(article)
    article.etat = "Recente";
    uploadData.append('file', this.file, this.file.name);
    uploadData.append('article', JSON.stringify(article));
    this.articleService.addArticle(uploadData)
      .subscribe(data => {
        this.article = data as Article;
        this.mode = 2;
        console.log("ok");
      }, error => {
        console.log(error);
      });
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.file = file;
  }

  logout() {
    this.authenticationService.logout();
  }

}
