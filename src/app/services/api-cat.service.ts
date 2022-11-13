import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCatService {
  
  // myKeycat = '4781a5f8-b3bb-42ad-95a5-eb518ba2d5b9';

  // headerDict = {
  //   'Content-Type': 'application/json',
  //   'x-api-key': this.myKeycat
  // }
  
  // urlCat = 'https://api.thecatapi.com/v1';

  // requestOptions = {                                 
  //   headers: new HttpHeaders (this.headerDict), 
  // };

  constructor(private http : HttpClient) { }


  getRandomCat(){
    const url = `https://api.thecatapi.com/v1/images/search?format=json&limit=10`;
    let rep = this.http.get(url).pipe(map(res => res));
    return rep;
  }
}
