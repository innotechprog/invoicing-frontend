import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpHandlerService {

  private otpKey = 'user_otp';

  constructor() {}

  setOtp(otp: string): void {
    sessionStorage.setItem(this.otpKey, otp);
  }

  getOtp(): string | null {
    return sessionStorage.getItem(this.otpKey);
  }

  removeOtp(): void {
    sessionStorage.removeItem(this.otpKey);
  }

  clearOtp(): void {
    sessionStorage.clear();
  }
}