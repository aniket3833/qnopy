import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from '../user/list-user/list-user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { UserDetailsComponent } from '../user/user-details/user-details.component';

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
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
