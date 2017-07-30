import { Injectable } from '@angular/core';
import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';


@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Observable.of(LEADERS).delay(2000).toPromise();
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });
  }

  getLeader(id: number): Promise<Leader>{
    return Observable.of(LEADERS.filter((leader) => (leader.id == id))[0]).delay(2000).toPromise();
  }

  getFeaturedPromotion(): Promise<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000).toPromise();
    // return new Promise(resolve => {
    //   setTimeout(() =>  resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    // });
  }

}
