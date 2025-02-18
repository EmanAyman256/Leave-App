import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';

const routes: Routes = [
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
