import { Component } from '@angular/core';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent {

  name: string = "";
  calories: number = 0; 
  image: string = "";
  newList: any[] = [];
  inputList: any = {};

  addList()
  {
    if(!(this.name == '' && this.calories == 0 && this.image=='')){
      this.inputList = {
        name: this.name,
        calory: this.calories,
        imageurl: this.image
      };
      this.newList = [...this.newList, this.inputList];
      this.name='';
      this.calories=0;
      this.image='';
    }
    console.log(this.newList);
  }

}
