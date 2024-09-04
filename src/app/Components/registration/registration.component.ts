import { Component,OnInit } from '@angular/core';
import { CustomerDataService } from '../../services/customer-data.service';
import { CustomerClass } from '../../classes/customer-class';
import { Router } from '@angular/router';
import { OtpHandlerService } from '../../services/otp-handler.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
customers:any;
customer = new CustomerClass();
constructor(private customerData:CustomerDataService,private otpHandler:OtpHandlerService, private router: Router){

}
ngOnInit():void{
//this.getCustomersData();
}
 addCustomer(){
this.customerData.addCustomer(this.customer).subscribe(res =>{
  //console.log(res);
  this.otpHandler.setOtp("1234");
  this.router.navigate(['/confirmation']);
})

 }
}
