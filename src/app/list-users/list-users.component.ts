import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geek } from '../models/geek';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  searchedvalue: string = 'iken';
  users: Geek[] = []

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error))
  }

  fetchUser(login: string) {
    this.router.navigateByUrl('/users/' + login)
  }
}