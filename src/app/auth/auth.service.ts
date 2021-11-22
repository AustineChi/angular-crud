
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../http.service';




interface loginStateProps {
  loading: boolean;
}

const initialState: loginStateProps = {
  loading: false,
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   _isLoggedIn$ = new BehaviorSubject<boolean>(false);
   loadingState$  = new BehaviorSubject<loginStateProps>(initialState);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private httpService: HttpService) {
    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
  }

  login(email: string, password: string) {
    return this.httpService.postRequest( "login", {email, password}).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth', response.token);
      })
    );
  }
}
