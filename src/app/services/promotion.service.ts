import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Rx';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable()
export class PromotionService {

  constructor(private http: Http, private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions').map(res => {
      return this.processHTTPMsgService.extractData(res);
    });
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions/' + id)
      .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?featured=true')
      .map(res => { return this.processHTTPMsgService.extractData(res)[0]; });
  }
}
