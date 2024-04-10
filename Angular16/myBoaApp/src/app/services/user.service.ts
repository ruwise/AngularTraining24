import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Impl Cors 

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {

    this.httpClient = httpClient;
  }

  // Implement the getUsers Service method  // GET IMPL 
  getUsers(): Observable<any> {

    let getUserUrl: string = 'http://localhost:7001/users';
    return this.httpClient.get(getUserUrl, { headers: this.headers })

  }
}
