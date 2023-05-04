import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path: 'addfood',
    component: AddFoodComponent
  },
  {
    path: 'foodlist',
    component: FoodListComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  // {
  //   path: 'search/:query',
  //   component: SearchComponent,
  //   children: [
  //     {
  //       path: ':query',
  //       component: SearchResultComponent
  //     }
  //   ]
  // },
  {
    path: 'search/:query',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
