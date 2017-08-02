import { Component, OnInit , Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { BaseURL }  from '../shared/baseurl';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import 'rxjs/add/operator/switchmap';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  errMess: string;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds  ,
      errmess => this.errMess = <any>errmess);
    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); }  ,
          errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: number){
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
