import {Utilisateur} from './utilisateur.model';

export class Auteur extends Utilisateur{
  nbrArticlesEcrites: number
  correspondance: boolean

  constructor() {
    super();
  }
}
