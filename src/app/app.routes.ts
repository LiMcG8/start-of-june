import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { LiveComponent } from './Live/live.component';
import { MusicComponent } from './music/music.component';
import { StoreComponent } from './store/store.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'news', component: NewsComponent, title: 'News' },
    { path: 'live', component: LiveComponent, title: 'Live' },
    { path: 'music', component: MusicComponent, title: 'Music' },
    { path: 'store', component: StoreComponent, title: 'Store' },
    { path: 'sign-up', component: SignUpComponent, title: 'Sign Up' },
    { path : '', redirectTo: '/news', pathMatch: 'full' }
];
