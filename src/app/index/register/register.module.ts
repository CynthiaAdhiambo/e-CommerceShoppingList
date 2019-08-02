import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  exports: [ RegisterComponent],
  imports: [
    RouterModule.forChild(RegisterRoutes),
    CommonModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }
