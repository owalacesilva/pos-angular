import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';

const routes: Routes = [{
  path: 'items',
  component: ItemsComponent,
},{
  path: 'items/new',
  component: ItemEditComponent,
},{
  path: 'items/:id',
  component: ItemEditComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
