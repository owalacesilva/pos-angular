import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemVariationsComponent } from './pages/item-variations/item-variations.component';
import { ItemPricingComponent } from './pages/item-pricing/item-pricing.component';
import { ItemImagesComponent } from './pages/item-images/item-images.component';

@NgModule({
  declarations: [
    ItemsComponent, 
    ItemEditComponent, 
    ItemVariationsComponent, 
    ItemPricingComponent, 
    ItemImagesComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DataTablesModule
  ]
})
export class ItemsModule { }
