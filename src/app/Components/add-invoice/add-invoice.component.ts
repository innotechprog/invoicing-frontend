import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      invoiceName: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      products: this.fb.array([])
    });
  }

  ngOnInit() {
    this.addProduct();  // Initialize the form with one product field
  }

  get products() {
    return this.invoiceForm.get('products') as FormArray;
  }

  addProduct() {
    const productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      itemPrice: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.products.push(productForm);
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
