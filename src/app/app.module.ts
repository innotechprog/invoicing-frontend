import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { CompanyregComponent } from './Components/companyreg/companyreg.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { CustomerinfoComponent } from './Components/customerinfo/customerinfo.component';
import { InvoicetabComponent } from './Components/invoicetab/invoicetab.component';
import { QuotestabComponent } from './Components/quotestab/quotestab.component';
import { PaymentstabComponent } from './Components/paymentstab/paymentstab.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutoLocationComponent } from './Components/auto-location/auto-location.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloaderComponent } from './Components/preloader/preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ConfirmationComponent,
    CompanyregComponent,
    MenuComponent,
    NavbarComponent,
    CustomersComponent,
    CustomerinfoComponent,
    InvoicetabComponent,
    QuotestabComponent,
    PaymentstabComponent,
    TabsComponent,
    ForgotpasswordComponent,
    AutoLocationComponent,
    AddInvoiceComponent,
    PreloaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule // Include ReactiveFormsModule in imports    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
