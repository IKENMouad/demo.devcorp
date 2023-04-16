import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Repositoy } from 'src/app/models/repositoy';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-list-repositoy',
  templateUrl: './list-repositoy.component.html',
  styleUrls: ['./list-repositoy.component.scss']
})
export class ListRepositoyComponent implements OnInit, OnChanges {


  @Input() repositories: Array<Repositoy> = [];
  filtredRepos: Array<Repositoy> = [];
  languages: Array<string> = [];
  selectedLanguage: string = ''

  filters: Array<any> = [{ label: 'Name', value: 'name' }, { label: 'Updated', value: 'updated_at' }, { label: 'Size', value: 'size' }]
  selectedFilter: string = ''

  searchRepos: string = '';


  selectedRepo?: Repositoy;
  commits: Array<any> = [];
  pulls: Array<any> = [];
  issues: Array<any> = [];

  constructor(private repoService: RepositoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (JSON.stringify(changes['repositories'].currentValue) != JSON.stringify(changes['repositories'].previousValue) && changes['repositories'].currentValue?.length > 0) {
      this.filtredRepos = [...this.repositories]
      let languages = this.repositories.filter(el => el.language).map(el => el.language);
      languages = languages.filter((language, index) => languages.indexOf(language) === index);
      this.languages = languages;
    }
  }

  ngOnInit(): void {
  }


  getRepoDetails(repo: Repositoy) {
    const { url = '', html_url = '' } = repo;
    if (url == '' || html_url == '') return;
    this.selectedRepo = { ...repo };

    forkJoin({
      commits: this.repoService.getCommitsByRepo(url),
      pulls: this.repoService.getPullsByRepo(url),
      issues: this.repoService.getIssuesByRepo(url),
    }).subscribe((response: any) => {
      const { commits = [], pulls = [], issues = [], }: { commits: Array<any>, pulls: Array<any>, issues: Array<any> } = response;
      this.commits = commits;
      this.pulls = pulls;
      this.issues = issues;
    })
  }

  filterRepos(filter: any) {
    const { filterType, filterValue = '' } = filter;
    if (!filterType) return;

    if (filterType === 'language') {
      this.selectedLanguage = filterValue;
      this.filtredRepos = this.repositories.filter(el => el.language?.toLowerCase() == filterValue?.toLowerCase())
    } else {
      const _selectedFilter = this.filters.find(el => el.value === filterValue);
      this.selectedFilter = _selectedFilter.label;
      if (_selectedFilter.value === 'updated_at') {
        this.filtredRepos = this.filtredRepos.sort((a: any, b: any) => (new Date(a['updated_at']) as any) - (new Date(b['updated_at']) as any));
      } else {
        this.filtredRepos = this.filtredRepos.sort((a: any, b: any) => a[_selectedFilter.value] - b[_selectedFilter.value]);
      }
    }

  }

  searchReposHandler() {
    this.filtredRepos = this.repositories.filter(el => el.name?.toLowerCase().includes(this.searchRepos?.toLowerCase()))
  }

}
