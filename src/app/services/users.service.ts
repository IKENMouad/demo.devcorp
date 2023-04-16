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

  public getUsers(name = '', page = 0, perPage = 30) {
    const api = `https://api.github.com/search/users?q=${name} in:name type:user&page=${page}&per_page=${perPage}`
    return this.httpClient.get(api);
  }
  public getUser(login: string): Observable<Geek> {
    return this.httpClient.get<Geek>(`${this.baseUrl}/${login}`);
  }


}
