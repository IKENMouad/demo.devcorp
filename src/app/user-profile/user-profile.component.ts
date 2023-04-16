import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Geek } from '../models/geek';
import { FollowerService } from '../services/follower.service';
import { RepositoryService } from '../services/repository.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  login!: string;
  user!: Geek;
  followers: Array<Geek> = []
  repositories: Array<any> = [];

  activeTab: string = 'repositories';


  constructor(
    private userService: UsersService,
    private followerService: FollowerService,
    private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {

      this.activatedRoute.params.subscribe((params: Params) => {
          const { login: geekLogin } = params;
          this.login = geekLogin;
        });
    // router.events.subscribe(ev => {
    //   if (ev instanceof NavigationEnd)
    //   var geekLogin =  this.activatedRoute.snapshot.paramMap.keys;
    //    debugger
    // })
  }

  ngOnInit(): void {
    if (this.login) {
      this.fetchUser(this.login);
      this.fetchRepositories(this.login);
      this.fetchFollowers(this.login);
    }
  }

  fetchUser(login: string) {
    this.userService.getUser(login).subscribe(
      user => this.user = user,
      error => console.log(error))
  }

  fetchRepositories(login: string) {
    this.followerService.getFollowers(login).subscribe(
      followers => this.followers = followers,
      error => console.log(error))
  }

  fetchFollowers(login: string) {
    this.repositoryService.getRepositories(login).subscribe(
      repositories => this.repositories = repositories,
      error => console.log(error))
  }

  onSwitchTab(tab: string) {
    this.activeTab = tab;
  }


}
