import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geek } from '../models/geek';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient,) { }

  public getFollowers(login: string): Observable<Array<Geek>> {
    return this.httpClient.get<Array<Geek>>(`${this.baseUrl}/${login}/followers`);
  }

}
