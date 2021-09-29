import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 
  getData(){
    return this.http.get<any>('assets/data/sample.json')
    .toPromise()
    .then( res => res.results)
  }
}
