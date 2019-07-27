import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CartComponent } from './home/cart/cart.component';
import { LoginComponent } from './index/login/login.component';
import { RegisterComponent } from './index/register/register.component';
import { ForgetPassComponent } from './index/forget-pass/forget-pass.component';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppMaterialModule } from './shared/app-material.module';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    SharedModule,
    RouterModule.forRoot(routes),
    AppMaterialModule,
    HttpClientModule
  ],
  exports: [AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
