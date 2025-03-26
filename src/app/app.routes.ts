import { Routes } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component'
import { ProjectLandingComponent } from '../components/project-landing/project-landing.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'project-landing/:project-name', component: ProjectLandingComponent},
    {path: '**', redirectTo: ''}
];
