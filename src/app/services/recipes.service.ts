import {Recipe} from '../recipes/recipe.model';
import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingradient} from '../shared/ingradient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipesService implements  OnInit {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('sample Recipe',
      'Sample Description for Recipe',
      'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-collage.jpg',
      [
                 new Ingradient('Meat', 10),
                 new Ingradient('French Fries', 20)
                ]),
    new Recipe('sample Recipe 2 ',
      'Sample Description for Recipe 2',
      'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-collage.jpg',
      [
        new Ingradient('Buns', 2),
        new Ingradient('Meat', 20)
      ])
  ];

  ngOnInit() {

  }

  constructor(private shoppingListService: ShoppingListService) { }


  public getRecipes(): Recipe[] {
    // Returns New Array copy from existing Recipe Array
    return this.recipes.slice();
  }

  public addIngradientsToShopping(ingradients: Ingradient[]) {
    this.shoppingListService.addMultipleIngradients(ingradients);
  }


}
