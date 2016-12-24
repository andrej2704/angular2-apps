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
        this.username = 'Belchenkov';
    }

    getUser(){
        return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret);
    }
}