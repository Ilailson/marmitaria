import { EventEmitter } from "@angular/core";
import { Food } from "../shared/food.model";

export class FoodListService{
    foodsChanged = new EventEmitter<Food[]>();

    private foodList: Food [] = [
        new Food('Bife',19),
        new Food('Fraudinha',10),
        new Food('Arroz',25)
    ];

getFoods(){
    return this.foodList.slice() //copiaArray
}

addFood(newFod: Food){
    this.foodList.push(newFod);

    this.foodsChanged.emit(this.foodList.slice())
}

}