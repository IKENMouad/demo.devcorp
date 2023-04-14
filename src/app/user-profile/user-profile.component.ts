import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Geek } from '../models/geek';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user!: Geek;
  login!: string;


  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      const { login: geekLogin } = params;
      this.login = geekLogin;
    });

  }

  ngOnInit(): void {
    this.login && this.fetchUser(this.login)
  }

  fetchUser(login: string) {
    this.userService.getUser(login).subscribe(
      user => this.user = user,
      error => console.log(error))
  }
}
