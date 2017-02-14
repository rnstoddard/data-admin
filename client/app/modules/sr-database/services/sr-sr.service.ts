import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {environment} from '../../../../environments/environment';

import {SR_SR_Num} from '../classes/SR_SR_Num';

@Injectable()
export class SrSrService {
  private apiURL = `${environment.srBaseApi}/sr`;

  constructor(private http : Http) { }

  public getAll(): Observable<SR_SR_Num[]>{
    return this.http.get(this.apiURL)
                    .map(this.extractArray)
                    .catch(this.handleError);
  }

  public getSrByNum(num:number): Observable<SR_SR_Num>{
    return this.http.get(`${this.apiURL}/${num}`)
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
