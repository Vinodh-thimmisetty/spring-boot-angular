import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  // @Output() showRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  addNewRecipe(recipeInfo: {name: string, description: string, imagePath: string}) {

    this.recipes.push(new Recipe(recipeInfo.name, recipeInfo.description, recipeInfo.imagePath, null ));
  }

  showRecipeDetail(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
    // this.showRecipe.emit(recipe);
  }


}
