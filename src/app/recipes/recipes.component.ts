import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    // alert('Recipe Component');
    this.recipeService
        .recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

  enableRecipeDetails(recipe: Recipe) {
    // alert('Selected Component');
    this.selectedRecipe = recipe;
  }

}
