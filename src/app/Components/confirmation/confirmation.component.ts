import { Component } from '@angular/core';
import { OtpHandlerService } from '../../services/otp-handler.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EncryptionHandlerService } from '../../services/encryption-handler.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  readonly companyType: string = "owner";
  otp: string = '';
  md5: any;
  constructor(private otpService: OtpHandlerService, private encryption: EncryptionHandlerService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.otpService.getOtp());
  }

  submitOtp(): void {
    const storedOtp = this.otpService.getOtp();
    this.md5 = this.encryption.hash(this.companyType);
    if (storedOtp === this.otp) {
      console.log('OTP verified successfully!');
      // Proceed with the next steps in your application

      this.router.navigate(['/companyreg/',this.md5]);
    } else {
      console.log('Invalid OTP. Please try again.');
    }
  }
}
