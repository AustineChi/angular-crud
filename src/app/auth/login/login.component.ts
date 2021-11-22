import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface loginState {
  loading: boolean;
}

const initialState: loginState = {
  loading: false,
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
    state = new BehaviorSubject<loginState>(initialState);

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,     private snackBar: MatSnackBar,
    ) {
    if (authService.isLoggedIn$) {
      router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
      .subscribe(
      (response: string) => {
        this.router.navigate(['/dashboard']);
      },
      (errorResp: any) => {
        this.snackBar.open(errorResp.error.error, 'close'), this.loading();
      }
      );
  }

  loading() {
    const state = this.state.getValue();
    this.state.next({
      ...state,
      loading: !state.loading,
    });
  }
}
