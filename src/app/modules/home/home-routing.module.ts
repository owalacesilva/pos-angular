import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [{
  path: 'sign_in',
  pathMatch: 'full',
  // canActivate: [AuthenticationGuard],
  component: SignInComponent,
},{
  path: 'sign_up',
  pathMatch: 'full',
  component: SignUpComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
