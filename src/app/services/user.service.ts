import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://18.224.215.177:1337';
  httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'});
  
  constructor(private http : HttpClient) { 

  }

  getUser(obj): Observable<object> {
    return this.http.post(`${this.baseUrl}/customer/login`,obj);
  }
  chOsta(obj): Observable<object> {
    return this.http.post(`${this.baseUrl}/customer/change_availability`,obj);
  }
 
  createUser(user: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/customer/signup_user`, user);
  }
  getCustomersList(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/list/${id}/`);
  }

  createOsta(osta: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/customer/signup_osta`, osta);
  }
}
