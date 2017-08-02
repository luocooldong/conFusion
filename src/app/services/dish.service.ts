import { Injectable, Inject } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


import { Observable } from 'rxjs/Rx';

// import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';





@Injectable()
export class DishService {

  image: string;

  constructor(
    private db: AngularFireDatabase,
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) {
  }


  getDishes(): Observable<Dish[]> {
    return this.db.list('dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.db.object('/dishes/' + id);
    // return this.restangular.one('dishes', id).get();


  }

  getFeaturedDish(): Observable<Dish> {


    // return this.restangular.all('dishes').getList({ featured: true })
    //   .map(dishes => dishes[0]);

    return this.db.object('/dishes/' + 1);


  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) });
  }
}
