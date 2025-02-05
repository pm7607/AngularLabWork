import { Routes } from '@angular/router';
import { ResumeMakerComponent } from './resume-maker/resume-maker.component';
import { IndexComponent } from './index/index.component';
import { PracticalPageComponent } from './practical-page/practical-page.component';
import { StaticCURDdemoComponent } from './static-curddemo/static-curddemo.component';
import { ArrayOfObjComponent } from './array-of-obj/array-of-obj.component';
import { DiractivesComponent } from './diractives/diractives.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { LabPracticalsComponent } from './lab-practicals/lab-practicals.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { StudentFormsComponent } from './student-forms/student-forms.component';
import { RouteDemoComponent } from './route-demo/route-demo.component';
import { Main1Component } from './route-demo/main1/main1.component';
import { Main2Component } from './route-demo/main2/main2.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'practical-page/resume-maker', component: ResumeMakerComponent},
    {path: 'practical-page', component: PracticalPageComponent},
    {path:'practical-page/static-curddemo', component: StaticCURDdemoComponent},
    {path:'practical-page/array-of-obj', component: ArrayOfObjComponent},
    {path:'practical-page/diractives', component: DiractivesComponent},
    {path:'practical-page/temp-driven-form', component: TempDrivenFormComponent},
    {path:'practical-page/lab-practicals', component: LabPracticalsComponent},
    {path:'collaborators', component: CollaboratorsComponent},
    {path:'practical-page/reactive-forms', component: ReactiveFormsComponent},
    {path:'practical-page/student-forms', component: StudentFormsComponent},
    {path:'practical-page/route-demo', component: RouteDemoComponent, children:[
        {path:"main1",component:Main1Component},
        {path:"main2", component:Main2Component}
    ]},
    {path:'practical-page/form-builder-demo',component:FormBuilderDemoComponent}


];
