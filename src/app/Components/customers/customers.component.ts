import { Component } from '@angular/core';
import { CustomerDataService } from '../../services/customer-data.service';
import { CompanyClass } from '../../classes/company-class';
import { CompanyDataService } from '../../services/company-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncryptionHandlerService } from '../../services/encryption-handler.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
customers:any;
companies:any;
companyType: string="customer";
md5 :any;
constructor(private customerData:CustomerDataService,
  private companiesData:CompanyDataService,
  private encryption:EncryptionHandlerService,
  private router: Router,
  private http: HttpClient){
  
}
ngOnInit():void{
  this.getCompanies();
  this.getEncryptedText();

}
getCustomersData(){
//console.log('hello ttch');
}
getEncryptedText() : string{
  return this.encryption.hash(this.companyType);
  console.log(this.md5);
 
}
getCompanies(){
  this.companiesData.getCompaniesData().subscribe(res =>{
   //console.log(res);
   this.companies = res;
  });
 }
}
