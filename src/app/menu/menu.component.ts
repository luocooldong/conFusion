import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { 

  }
  //生命周期方法，在Component初始化和创建的时候都会执行
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    console.log(dish);
    this.selectedDish = dish;
  }

}
