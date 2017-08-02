import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';



import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader>{
     return this.restangular.one('leaders', id).get();
  }

  getFeaturedPromotion(): Observable<Leader> {
  return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
  }

}
