import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'User List'}
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
