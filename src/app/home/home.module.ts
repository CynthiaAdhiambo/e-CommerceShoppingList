import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../shared/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class HomeModule { }
