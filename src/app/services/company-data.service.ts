import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private httpClient:HttpClient) { 

  }
  addCompany(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addComp',data)
  }
  getCompaniesData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/companies');
  }
  getCompaniesDataByID(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/company/'+id);
  }
}
