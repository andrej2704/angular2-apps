import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from "../../../Artist";


@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
    searchStr: string;
    searchResult: Artist[];

    constructor(private spotifyService: SpotifyService) {

    }

    searchMusic(){
        this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
            this.searchResult = res.artists.items;
        })
    }
}
