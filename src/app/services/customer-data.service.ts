import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private httpClient:HttpClient) { 

  }
  addCustomer(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addc',data)
  }
}
