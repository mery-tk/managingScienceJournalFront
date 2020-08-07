import {Utilisateur} from './utilisateur.model';

export class Auteur extends Utilisateur{
  nbrArticlesEcrites: number=0;
  correspondance: boolean=false;

  constructor() {
    super();
  }
}
