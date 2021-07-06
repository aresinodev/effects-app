import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${ this.url }/users?delay=3`)
    .pipe(
      map((response: any) => response['data'])
    );
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${ this.url }/users/${ id }`)
    .pipe(
      map((response: any) => response['data'])
    );
  }
}
