import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserStateService } from './user-state.service';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UserListComponent,
    DeleteUserModalComponent,
    CreateUserModalComponent,
    EditUserViewComponent,
  ],
  imports: [
    MatIconModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressBarModule,
    UsersRoutingModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [
    UserListComponent,
  ],
  providers: [
    UserStateService
  ]
})
export class UsersModule { }
