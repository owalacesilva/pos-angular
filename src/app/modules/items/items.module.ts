import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';

@NgModule({
  declarations: [ItemsComponent, ItemEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DataTablesModule
  ]
})
export class ItemsModule { }
