import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return Observable.of(DISHES).delay(2000).toPromise();
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES), 2000);
    // })
  }

  getDish(id: number): Promise<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000).toPromise();
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    // });
  }

  getFeaturedDish(): Promise<Dish> {
     return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000).toPromise();
    // return new Promise(resolve => {
    //   // Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    // });
  }

}
