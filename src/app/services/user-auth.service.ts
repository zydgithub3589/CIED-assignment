import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  public apiUrl = "https://assignment.leadtracker.cied.dev/v1/accounts/login/"
  constructor(private http: HttpClient) { }

  login(userData : any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, userData);
  }
}
