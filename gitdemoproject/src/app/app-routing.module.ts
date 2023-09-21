import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [

  {
    path:"create" , component:CreateuserComponent
  },
  {
    path:"view" , component:ViewuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
