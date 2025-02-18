import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';
import { ActivityRequestFormComponent } from './activity-request-form/activity-request-form.component';

const routes: Routes = [
  {
    path:"",
    component:ActivityRequestFormComponent
  },
  {
    path:"request",
    component:ActivityRequestFormComponent
  }
  ,

  {
    path:'success',
    component:SuccessSubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
