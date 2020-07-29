import {Utilisateur} from './utilisateur.model';

export class Referee extends Utilisateur{
  nbrArticlesEvaluees: number

  constructor() {
    super();
  }
}
