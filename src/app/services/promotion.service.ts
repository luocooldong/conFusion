import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Rx';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class PromotionService {

  constructor(private db: AngularFireDatabase,
     private restangular : Restangular,
     private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.db.list('dishes');
    //  return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.db.object('/promotions/' + id);
    // return this.restangular.one('promotions',  id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {

    return this.db.object('/promotions/' + 0);

    // return this.restangular.all('promotions').getList({featured: true})
    //   .map(promotions => promotions[0]);
  }
}
