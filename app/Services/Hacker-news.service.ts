


import { Injectable} from '@angular/core' ;
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from  '../models/User';

import { Story } from '../models/Story';
import { PollResult } from '../models/poll-result';


@Injectable()
export class HackerNewsService {

baseUrl: string;

constructor(private http : Http){
   this.baseUrl = 'https://node-hnapi.herokuapp.com';
}




fetchStories(storyType: string, page: number) : Observable<any>{
return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
              .map(response=>response.json());
}


fetchItem(id:number):Observable<Story>{
console.log('the id is', id);
return this.http.get(`${this.baseUrl}/item/${id}`).map( res=>res.json())



}

//***************************************//

fetchUser(id:number):Observable<User>{
console.log('the id is', id);
return this.http.get(`${this.baseUrl}/user/${id}`)
                  .map(response => response.json());
}


//*******************************//
 fetchPollContent(id: number): Observable<PollResult> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
    .map(response=>response.json());
}











}