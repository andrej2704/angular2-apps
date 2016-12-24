import {Component} from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './app.carousel.html'
})
export class NgbdCarouselBasic {
  photos: any[];
  constructor(private photoService: PhotoService){
    this.getPhotos();
  }
  getPhotos(){
        this.photoService.getPhotos().subscribe(items => {
            this.photos = items.photos;
        })
  }
}
