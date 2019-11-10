import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './component/list-user/list-user.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
