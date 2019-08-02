import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),
    CommonModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class LoginModule { }
