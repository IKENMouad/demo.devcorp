import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Repositoy } from 'src/app/models/repositoy';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-list-repositoy',
  templateUrl: './list-repositoy.component.html',
  styleUrls: ['./list-repositoy.component.scss']
})
export class ListRepositoyComponent implements OnInit {


  @Input() repositories: Array<Repositoy> = [];


  selectedRepo?: Repositoy;
  commits: Array<any> = [];
  pulls: Array<any> = [];
  issues: Array<any> = [];

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
  }

  getRepoDetails(repo: Repositoy) {
    const { url = '' } = repo;
    if (url == '') return;

    this.selectedRepo = { ...repo };

    forkJoin({
      commits: this.getCommitsByRepo(url),
      pulls: this.getPullsByRepo(url),
      issues: this.getIssueByRepo(url)
    }).subscribe((response: any) => {
      const { commits = [], pulls = [], issues = [] }: { commits: Array<any>, pulls: Array<any>, issues: Array<any> } = response;
      this.commits = commits;
      this.pulls = pulls;
      this.issues = issues;
    })

  }

  getCommitsByRepo(repoUrl: string) {
    return this.repoService.getCommitsByRepo(repoUrl);
  }

  getPullsByRepo(repoUrl: string) {
    return this.repoService.getPullsByRepo(repoUrl);
  }

  getIssueByRepo(repoUrl: string) {
    return this.repoService.getIssueByRepo(repoUrl);
  }

}
