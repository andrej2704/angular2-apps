import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
    user: any;
    repos: any[];
    username: string;
    photos: any[];

    constructor(private githubService: GithubService){
        this.user = false;
    }

    searchUser(){
        this.githubService.updateUser(this.username)
        this.githubService.getUser().subscribe(user => {
            this.user = user;
        });
        this.githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });

    };
}
