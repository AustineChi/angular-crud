import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface loginState {
  loading: boolean;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


    loginForm: FormGroup;

  constructor(public authService: AuthService, private router: Router,     private snackBar: MatSnackBar,
    ) {
    if (authService.isLoggedIn$) {
      router.navigate(['/dashboard']);
    }
    const { required, email } = Validators
    this.loginForm = new FormGroup({
      email: new FormControl('', [required, email]),
      password: new FormControl('', [required])
    })
  }



  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.handleLoadingState();
    this.authService
      .login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
      .subscribe(
      () => {
        this.handleLoadingState();
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.handleLoadingState();
        this.snackBar.open(error, 'close');
      }
      );
  }


  handleLoadingState() {
    const state = this.authService.loadingState$.getValue();
    this.authService.loadingState$.next({
      ...state,
      loading: !state.loading,
    });
  }
  ngOnInit(): void {
  }
}
