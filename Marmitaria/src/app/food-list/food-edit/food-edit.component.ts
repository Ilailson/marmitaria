import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent {


  @ViewChild("nameInput")
  nameInputReff!: ElementRef;
  @ViewChild("amountInput")
  amountInputReff!: ElementRef;

  @Output() foodAdded = new EventEmitter<Food>();

  addFood(){
    const foodName = this.nameInputReff.nativeElement.value;
    const foodAmount = this.amountInputReff.nativeElement.value;
    const newFood = new Food(foodName, foodAmount);
    this.foodAdded.emit(newFood);
  }
}
