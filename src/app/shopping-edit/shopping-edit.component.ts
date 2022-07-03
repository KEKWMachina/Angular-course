import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredientName: string = '';
  ingredientQuantity: number = null;

  submitNewIngredient(event: Event) {
    event.preventDefault();
    
    this.ingredientAdded.emit({
      name: this.ingredientName,
      amount: this.ingredientQuantity,
    });
    
    this.clearInput();
  }

  clearInput() {
    this.ingredientName = '';
    this.ingredientQuantity = null;
  }
}
