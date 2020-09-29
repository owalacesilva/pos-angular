import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeModule } from './modules/home/home.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HeaderPrimaryComponent } from './components/header-primary/header-primary.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrimaryComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
