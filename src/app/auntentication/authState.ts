// auth.reducer.ts
export interface AuthState {
    isLoggedIn: boolean;
  }
  
  export const initialAuthState: AuthState = {
    isLoggedIn: false
  };
  