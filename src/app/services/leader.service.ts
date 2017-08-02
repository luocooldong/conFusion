import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Leader }  from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';



import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class LeaderService {

  constructor( private db: AngularFireDatabase,
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.db.list('leaders');
  }

  getLeader(id: number): Observable<Leader>{
     return this.db.object('/leaders/' + id);
  }

  getFeaturedPromotion(): Observable<Leader> {
    return this.db.object('/leaders/' + 0);
  // return this.restangular.all('leaders').getList({featured: true})
  //     .map(leaders => leaders[0]);
  // }
  }

}
