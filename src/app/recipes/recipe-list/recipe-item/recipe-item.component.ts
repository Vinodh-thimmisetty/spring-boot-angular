import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
// import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipeName = '';
  recipeDesc = '';
  recipeImage = 'http://www.seriouseats.com/images/2017/09/20170919-stir-fry-recipes-roundup-collage.jpg';

  // @Input() recipe: Recipe;
  @Output() addRecipe = new EventEmitter<{name: string, description: string, imagePath: string}>();

  constructor() { }

  ngOnInit() {
  }

  addNewRecipeItem(recipeDesc: HTMLInputElement) {
    return this.addRecipe.emit(
      {
      name: this.recipeName,
      description: recipeDesc.value,
      imagePath: this.recipeImage
      }
    );
  }

}
