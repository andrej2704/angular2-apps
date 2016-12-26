import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../artist';
import {Album} from '../../../album';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {
    id: string;
    album: Album[];

    constructor(private spotifyService: SpotifyService,
    private router: ActivatedRoute){

    }

    ngOnInit(){
        this.router.params
            .map(params => params["id"])
            .subscribe((id) => {
                this.spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            });
    }
}
