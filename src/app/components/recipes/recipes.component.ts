import { Component } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe: Recipe = new Recipe('Apple Pie', 'Lots of Apples', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg');

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
