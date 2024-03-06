import { Component, ElementRef, ViewChild } from '@angular/core';
import { Food } from 'src/app/shared/food.model';
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent {


  @ViewChild("nameInput") nameInputReff!: ElementRef;
  @ViewChild("amountInput") amountInputReff!: ElementRef;

constructor(private foodListService: FoodListService){
}

  addFood(){
    const foodName = this.nameInputReff.nativeElement.value;
    const foodAmount = this.amountInputReff.nativeElement.value;
    const newFood = new Food(foodName, foodAmount);
    this.foodListService.addFood(newFood)
  }
}
