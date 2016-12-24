import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private clientId = '870be3b8b222805063ec';
    private clientSecret = '3ad25915e860920dff42f493b4ae2c14efd69293';

    constructor(private http: Http) {
        console.log('Github Service Ready ...');
        this.username = '';
    }

    getUser(){
        return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret).
            map(res => res.json());
    }

    getRepos(){
        return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret).
            map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}