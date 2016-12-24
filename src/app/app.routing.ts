import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotoComponent } from './components/photo/photo.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'github',
        component: ProfileComponent
    },
    {
        path: 'photo',
        component: PhotoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);