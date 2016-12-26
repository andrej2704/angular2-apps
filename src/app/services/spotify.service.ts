import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private http: Http) {
        console.log('500px Service Ready ...');
    }

  searchMusic(str: string, type='artist') {
      this.searchUrl = "https://api.spotify.com/v1/search?query=" + str+"&offset=0&limit=20&type="+type+"&market=US";
      return this.http.get(this.searchUrl)
        .map(res => res.json());
  }

  getArtist(id: string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this.http.get(this.artistUrl)
        .map(result => result.json());
  }

  getAlbums(artistId: string){
      this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this.http.get(this.albumsUrl)
        .map(result => result.json());
  }
 
  getAlbum(id: string){
      this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this.http.get(this.albumUrl)
        .map(result => result.json());
  }
}