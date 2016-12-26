import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../artist';
import {Album} from '../../../album';
import {SpotifyService} from '../../services/spotify.service';




@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute){

    }

    ngOnInit(){
        this.route.params
            .map(params => params["id"])
            .subscribe((id) => {
                this.spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
                this.spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            });
    }
}
