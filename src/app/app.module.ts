import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotoComponent } from './components/photo/photo.component';

import {routing} from './app.routing';

import { NgbdAlertBasic } from './app.alert-basic';
import { NgbdCarouselBasic } from './components/carousel/app.carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
    PhotoComponent,
    NgbdAlertBasic,
    NgbdCarouselBasic
  ],
  imports: [
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
