// auth.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auntentication/auth.actions'
import { AppState } from '../auntentication/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>) {}

  login(): void {
    // Authentication logic
    this.store.dispatch(AuthActions.login());
  }

  logout(): void {
    // Logout logic
    this.store.dispatch(AuthActions.logout());
  }
}
