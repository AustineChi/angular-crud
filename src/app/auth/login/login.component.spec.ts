import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './login.component';
import { AuthRoutingModule } from '../auth-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        AuthRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        MatButtonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the form', async () => {
    await render(LoginComponent);
  });


  it('form should display error messages and submit if valid', async () => {
    const submitSpy = jest.fn();
    await render(LoginComponent, {
      imports: [],
      componentProperties: {
        loginForm: {
          emit: submitSpy
        } as any
      }
    });
  });


  it('test filled form on change and click', async () => {
  await render(LoginComponent);

  const nameControl = screen.getByRole('input', { name: 'email' });
  const passwordControl = screen.getByRole('input', { name: 'password' });

  expect(nameControl).toBeInTheDocument;
  expect(passwordControl).toBeInTheDocument;

  userEvent.type(nameControl, 'ememem@gmail.com');
  userEvent.type(passwordControl, '12yeuiie');

  const form = screen.getByRole('form');
  expect(form).toHaveFormValues({
    email: 'ememem@gmail.com',
    password: '12yeuiie',
  });
});


});
