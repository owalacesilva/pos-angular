import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HeaderPrimaryComponent } from './components/header-primary/header-primary.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrimaryComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
