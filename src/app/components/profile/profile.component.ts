import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
    public user: any;
    constructor(private githubService: GithubService){
        this.githubService.getUser().subscribe(user => {
            this.user = user.json();
        })
    }
}
