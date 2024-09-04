import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDataService } from '../../services/customer-data.service';
import { CompanyClass } from '../../classes/company-class';
import { CompanyDataService } from '../../services/company-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrl: './customerinfo.component.css'
})
export class CustomerinfoComponent {
  company: any;
  constructor(private route: ActivatedRoute, private companyData: CompanyDataService) { }

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route snapshot
    const companyId = this.route.snapshot.paramMap.get('id');
    this.getCompanyByID(companyId);
  }

  //Get a company by companyID
  getCompanyByID(id: any) {
    this.companyData.getCompaniesDataByID(id).subscribe(res => {
      //console.log(res);
      this.company = res;
    });
  }
}
