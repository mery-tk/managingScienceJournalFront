import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from "../model/utilisateur.model";

@Injectable()
export class UtilisateurService {
  constructor(private  http: HttpClient) { }

  enregistrerUtilisateur(utilisateur: Utilisateur) {
    return this.http.post('http://localhost:8080/utilisateurs', utilisateur);
  }


}
