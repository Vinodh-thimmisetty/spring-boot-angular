import {Ingradient} from '../shared/ingradient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingradients: Ingradient[];

  constructor(name: string, description: string, imagePath: string, ingradients: Ingradient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingradients = ingradients;
  }

}
