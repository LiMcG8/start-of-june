import { Routes } from "@angular/router";
import { LiveComponent } from "./live.component";

export const liveRoutes: Routes = [
    { path: 'welcome', component: LiveComponent, title: 'Welcome' },
    { path: 'documents', component: LiveComponent, title: 'Documents' },
    { path: 'liam', component: LiveComponent, title: 'LiamC' },
    {path: 'merch', component: LiveComponent, title: 'Merch'},
]