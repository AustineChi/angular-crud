import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';
import { EditUserViewComponent } from './edit-user-view.component';
import { CreateUserModalComponent } from '../create-user-modal/create-user-modal.component';

describe('EditUserViewComponent', () => {
  let component: EditUserViewComponent;
  let fixture: ComponentFixture<EditUserViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserViewComponent ,
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
        Observable,
        throwError,
        catchError,
        retry,
        environment

      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should render the form', async () => {
    await render(EditUserViewComponent);
  });

  it('form should display error messages and submit if valid', async () => {
    const submitSpy = jest.fn();
    await render(EditUserViewComponent, {
      imports: [],
      componentProperties: {
        userForm: {
          emit: submitSpy
        } as any
      }
    });
  });


  it('test filled form on change and click', async () => {
    await render(CreateUserModalComponent);
  
    const nameControl = screen.getByRole('input', { name: 'name' });
    const jobControl = screen.getByRole('input', { name: 'job' });
  
    expect(nameControl).toBeInTheDocument;
    expect(jobControl).toBeInTheDocument;
  
    userEvent.type(nameControl, 'smith coy');
    userEvent.type(jobControl, 'Engineer');
    
    const form = screen.getByRole('form');
    expect(form).toHaveFormValues({
      name: 'smith coy',
      job: 'Engineer',
    });
  });

});







