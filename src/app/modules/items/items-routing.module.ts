import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';

import { ItemVariationsComponent } from './pages/item-variations/item-variations.component';
import { ItemPricingComponent } from './pages/item-pricing/item-pricing.component';
import { ItemImagesComponent } from './pages/item-images/item-images.component';

const routes: Routes = [{
  path: 'items',
  pathMatch: 'full', 
  component: ItemsComponent,
},{
  path: 'items/new',
  pathMatch: 'full', 
  component: ItemEditComponent,
},{
  path: 'items/:id',
  pathMatch: 'full', 
  component: ItemEditComponent,
},{
  path: 'items/:id/variations',
  component: ItemVariationsComponent,
},{
  path: 'items/:id/pricing',
  component: ItemPricingComponent,
},{
  path: 'items/:id/images',
  component: ItemImagesComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
