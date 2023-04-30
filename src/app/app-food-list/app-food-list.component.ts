import { Component, OnInit, Input } from '@angular/core';
import { FoodList} from '../shared/food_list';
import { Ifoodlist } from '../shared/interface';


@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html', 
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  foodlist: Ifoodlist[] = FoodList.foodlist;
  @Input()
  filteredList: Ifoodlist[] = this.foodlist;
  query: any = "";
  ngOnInit(): void {}
}