import { fireEvent, screen } from '@testing-library/angular';
import "@testing-library/jest-dom";

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersRoutingModule } from '../users-routing.module';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { CreateUserModalComponent } from '../create-user-modal/create-user-modal.component';
import { DeleteUserModalComponent } from './delete-user-modal.component';
import { EditUserViewComponent } from '../edit-user-view/edit-user-view.component';

describe('DeleteUserModalComponent', () => {
  let component: DeleteUserModalComponent;
  let fixture: ComponentFixture<DeleteUserModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EditUserViewComponent ,
        UserListComponent,
        DeleteUserModalComponent,
        CreateUserModalComponent,
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
      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('check if delete was called with the right prarams', () => {
    const deleteButton = screen.getByRole('button', { name: 'delete' });
    fireEvent.click(deleteButton);

    expect(component).toHaveBeenCalledTimes(1);
  });
});




