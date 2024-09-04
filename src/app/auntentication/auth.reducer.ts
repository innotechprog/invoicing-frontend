// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './authState';
import * as AuthActions from './auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, state => ({ ...state, isLoggedIn: true })),
  on(AuthActions.logout, state => ({ ...state, isLoggedIn: false }))
);
