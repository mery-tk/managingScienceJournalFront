import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur.model";
import {UtilisateurService} from "../services/utilisateur.service";
import {AuteurService} from "../services/auteur.service";
import {Auteur} from "../model/auteur.model";

@Component({
  selector: 'app-formul-inscription',
  templateUrl: './formul-inscription.component.html',
  styleUrls: ['./formul-inscription.component.css']
})
export class FormulInscriptionComponent implements OnInit {
  
  mode: number = 1;
auteur:Auteur=new Auteur();
aut:Utilisateur=new Utilisateur();
a:boolean;
  constructor(public utilisateurService: UtilisateurService, public auteurService: AuteurService) {
  }

  ngOnInit(): void {

  }
enregistrerAuteurr(){
	this.mode=4;
}
 
 enregistrerAuteur() {

      this.auteurService.addAuteur(this.auteur)
        .subscribe(data => {
         //  @ts-ignore
          this.auteur = data;
          this.mode = 5;
		  console.log(this.auteur);
          alert("Votre inscription a été effectué avec succès");
        }, err => {
          console.log(err);
        })

   


  }
  enregistrerUtilisateurr(){
  this.mode=2;}
  
  
    enregistrerUtilisateur() {

      this.utilisateurService.enregistrerUtilisateur(this.aut)
        .subscribe(data => {
          // @ts-ignore
          this.aut = data;
          this.mode = 3;
          alert("Votre inscription a été effectué avec succès");
        }, err => {
          console.log(err);
        })

   


  }
  
  
  
  
  
  }



