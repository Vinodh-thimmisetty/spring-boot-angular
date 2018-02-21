import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngradientsToShopping(this.recipe.ingradients);
  }

}
