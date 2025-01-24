import { Routes } from '@angular/router';
import { ResumeMakerComponent } from './resume-maker/resume-maker.component';
import { IndexComponent } from './index/index.component';
import { PracticalPageComponent } from './practical-page/practical-page.component';
export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'practical-page/resume-maker', component: ResumeMakerComponent},
    {path: 'practical-page', component: PracticalPageComponent},
];
