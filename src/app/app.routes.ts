import { Routes } from '@angular/router';
import { ResumeMakerComponent } from './resume-maker/resume-maker.component';
import { IndexComponent } from './index/index.component';
import { PracticalPageComponent } from './practical-page/practical-page.component';
import { StaticCURDdemoComponent } from './static-curddemo/static-curddemo.component';
import { ArrayOfObjComponent } from './array-of-obj/array-of-obj.component';
import { DiractivesComponent } from './diractives/diractives.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { LabPracticalsComponent } from './lab-practicals/lab-practicals.component';
export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'practical-page/resume-maker', component: ResumeMakerComponent},
    {path: 'practical-page', component: PracticalPageComponent},
    {path:'practical-page/static-curddemo', component: StaticCURDdemoComponent},
    {path:'practical-page/array-of-obj', component: ArrayOfObjComponent},
    {path:'practical-page/diractives', component: DiractivesComponent},
    {path:'practical-page/temp-driven-form', component: TempDrivenFormComponent},
    {path:'practical-page/lab-practicals', component: LabPracticalsComponent}
];
