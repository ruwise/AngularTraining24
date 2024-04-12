import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Impl Cors 

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {

    this.httpClient = httpClient;
  }

  //   "/users/delete/:id": "/users/:id"

  // Implement the getUsers Service method  // GET IMPL 
  getAllUsers(): Observable<any> {
    let getUserUrl: string = 'http://localhost:7001/users';
    return this.httpClient.get(getUserUrl, { headers: this.headers });
  }

  createNewUSer(user: User): Observable<User> {
    let creatUserUrl: string = 'http://localhost:7001/users/';
    return this.httpClient.post<User>(creatUserUrl, user, {headers: this.headers});
  }

  updateUser(user: User): Observable<User> {
    let creatUserUrl: string = 'http://localhost:7001/users/'+user.id;
    return this.httpClient.put<User>(creatUserUrl, user, {headers: this.headers});
  }
  deleteUser(id: string): Observable<User> {
    let creatUserUrl: string = 'http://localhost:7001/users/'+id;
    return this.httpClient.delete<User>(creatUserUrl, {headers: this.headers});
  }
}
