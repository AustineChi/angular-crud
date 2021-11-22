import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'User List'}
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent,
    data: { title: 'User Details'}
  },
  {
    path: 'edit/:id',
    component: EditUserViewComponent,
    data: { title: 'Edit User Details'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
