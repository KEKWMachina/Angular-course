import { Component } from '@angular/core';
import { Ingredient } from '../ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Carrot', 5),
    new Ingredient('Pickle', 6),
  ];

  onIngredientAdd(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
