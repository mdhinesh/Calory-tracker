import { Component } from '@angular/core';
import { Food } from '../data-type';
import { foodData } from '../data';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {

  foodData: Food[] = foodData;
  
}
