import { Injectable } from '@angular/core';
import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/switchMap';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable()
export class LeaderService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
   return this.http.get(baseURL + 'leaders')
      .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getLeader(id: number): Observable<Leader>{
    return this.http.get(baseURL + 'leaders/' + id)
      .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getFeaturedPromotion(): Observable<Leader> {
   return this.http.get(baseURL + 'leaders?featured=true')
      .map(res => { return this.processHTTPMsgService.extractData(res)[0]; });
  }

}
