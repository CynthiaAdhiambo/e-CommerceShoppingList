import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../shared/app-material.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ IndexComponent],
  exports: [ IndexComponent ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    SharedModule
  ],
  providers: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
