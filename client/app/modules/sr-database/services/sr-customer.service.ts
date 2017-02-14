import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {SR_Customer} from '../classes/SR_Customer';

@Injectable()
export class SrsCustomerService {
  private apiURL = "http://localhost:4040/api/sr/customer";

  constructor(private http : Http) { }

  public getAll(): Observable<SR_Customer[]>{
    return this.http.get(this.apiURL)
                    .map(this.extractArray)
                    .catch(this.handleError);
  }

  public getCustById(id:number): Observable<SR_Customer>{
    return this.http.get(`${this.apiURL}/${id}`)
                    .map(this.extractObject)
                    .catch(this.handleError);
  }

  private extractArray(res: Response) {
    let data = res.json();
    return data || [];
  }
  private extractObject(res: Response) {
    let data = res.json()[0];
    return data || {};
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
