import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

const routes: Routes = [{
  path: 'customers',
  component: CustomersComponent,
},{
  path: 'customers/new',
  component: CustomerEditComponent,
},{
  path: 'customers/:id',
  component: CustomerEditComponent,
},{
  path: 'customers/:id/details',
  component: CustomerDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
