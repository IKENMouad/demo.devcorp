import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geek } from '../models/geek';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  searchedValue: string = '';
  page: number = 1;
  perPage: number = 40;
  totalItems = 0;
  incomplete_results = false;
  users: Geek[] = [];

  @Input() followers: Array<Geek> = [];
  @Input() isFollowers: boolean = false;


  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.isFollowers) {
      this.users = this.followers;
    } else this.fetchUsers(this.searchedValue, this.page, this.perPage)
  }

  fetchUsers(searchedValue: string, page: number, perPage: number) {
    this.usersService.getUsers(searchedValue, page, perPage).subscribe(
      (response: any) => {
        this.users = [...this.users, ...response.items]
        // this.totalItems = response.total_count;
        this.incomplete_results = response.incomplete_results
      },
      error => console.log(error))
  }

  fetchUser(login: string) {
    this.router.navigateByUrl('/users/' + login)
  }

  loadMore() {
    this.fetchUsers(this.searchedValue, this.page + 1, this.perPage);
  }

  searchForUsers() {
    this.users = []
    this.fetchUsers(this.searchedValue, 0, this.perPage);
  }
}