import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomersModule } from '../customers/customers.module';
import { ItemsModule } from '../items/items.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CustomersModule, 
    ItemsModule
  ]
})
export class DashboardModule { }
