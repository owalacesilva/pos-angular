import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DataTablesModule
  ]
})
export class ItemsModule { }
