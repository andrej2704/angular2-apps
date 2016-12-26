import { Component } from '@angular/core';
import {GithubService} from './services/github.service';
import {PhotoService} from './services/photo.service';
import {SpotifyService} from './services/spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService, PhotoService, SpotifyService]
})
export class AppComponent {
  title = 'app works!';
}
