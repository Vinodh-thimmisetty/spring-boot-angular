import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {RecipesService} from '../../services/recipes.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  // recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipesService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    alert('Recipe Details Component');
   // const id = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params
      .subscribe(
        (params: Params) => {
          this.recipeId = +params['id'];
          alert(this.recipeId);
          this.recipeService.getRecipe(this.recipeId);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngradientsToShopping(this.recipe.ingradients);
  }

}
