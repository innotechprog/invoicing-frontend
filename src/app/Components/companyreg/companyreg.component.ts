import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyClass } from '../../classes/company-class';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-companyreg',
  templateUrl: './companyreg.component.html',
  styleUrls: ['./companyreg.component.css']
})
export class CompanyregComponent implements OnInit {
  company = new CompanyClass();
  file: File | null = null;
  id: string | null = null;

  constructor(
    private companyData: CompanyDataService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id'); // Get the ID from the URL
      if (this.id) {
        this.company.type = this.id; // Set the ID in the company object
       // console.log('URL ID:', this.company.type); // Debug: check if URL ID is being set
      }
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }

  addCompany(): void {
    if (this.file) {
      // Handle the file upload or processing here
      console.log('File to upload:', this.file);

      // Send the file to a server
      this.uploadFile(this.file).subscribe(
        response => {
          console.log('Upload successful:', response);
        },
        error => {
          console.error('Upload failed:', error);
        }
      );
    } else {
      console.log('No file selected');
    }

    //console.log('Company data before sending:', this.company); // Debug: log the company data being sent

    this.companyData.addCompany(this.company).subscribe(res => {
      // Navigate to confirmation page after adding company
      //console.log('Server response:', res); // Debug: log the server response
     this.router.navigate(['/menu']);
    });
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    // Replace 'http://127.0.0.1:8000/api/upload' with your actual API endpoint
    return this.http.post('http://127.0.0.1:8000/api/upload', formData);
  }
}
