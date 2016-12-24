import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {

    static API_URL: string = 'https://api.500px.com/v1';
    static KEY: string = 'GqAHJcjzaZUqVrxFftGHOm9QpWCOvQaGeIf9UXbM';

    constructor(private http: Http) {
        console.log('500px Service Ready ...');
    }

  getPhotos() {
   return this.http
      .get(`${PhotoService.API_URL}/photos?feature=user&username=photographydailylife&image_size=4&consumer_key=${PhotoService.KEY}`)
      .map((res: any) => res.json());
  }
}