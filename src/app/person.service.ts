import { Injectable } from '@angular/core';
import {Person} from './shared/person';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) {}

  getUsers() : Observable<Array<Person>>{
    return this.http.get(this.url)
                    .map(this.extractData);
  }

  private extractData(res: Response){
    var body = res.json();

    var userArray = new Array<Person>();
    
    return body || [];
  }
}
