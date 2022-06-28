import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Carrot', 5), new Ingredient('Pickle', 6)];

  constructor() {}

  ngOnInit(): void {}
}
