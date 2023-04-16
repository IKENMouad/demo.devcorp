import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geek } from '../models/geek';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient,) { }

  getRepositories(login: string): Observable<Array<Geek>> {
    return this.httpClient.get<Array<Geek>>(`${this.baseUrl}/users/${login}/repos`);
  }

  getCommitsByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/commits`);
  }

  getPullsByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/pulls`);
  }

  getIssuesByRepo(repoUrl: string) {
    return this.httpClient.get(`${repoUrl}/issues`);
  }
}