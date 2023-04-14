import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geek } from '../models/geek';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient,) { }

  public getUsers(): Observable<Array<Geek>> {
    return this.httpClient.get<Array<Geek>>(this.baseUrl);
  }
  public getUser(login: string): Observable<Geek> {
    return this.httpClient.get<Geek>(`${this.baseUrl}/${login}`);
  }


}
