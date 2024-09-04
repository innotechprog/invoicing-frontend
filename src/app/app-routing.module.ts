import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
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
import { AutoLocationComponent } from './Components/auto-location/auto-location.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';


const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'home', component : HomeComponent},
  {path:'login', component : LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'companyreg/:id', component: CompanyregComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customerinfo/:id', component: CustomerinfoComponent},
  {path: 'invoicetab', component: InvoicetabComponent},
  {path: 'quotestab', component: QuotestabComponent},
  {path: 'payments', component: PaymentstabComponent},
  {path: 'tabs', component:TabsComponent},
  {path: 'forgot-pas', component:ForgotpasswordComponent},
  {path: 'autoLocation',component:AutoLocationComponent},
  {path: 'addInv',component:AddInvoiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
