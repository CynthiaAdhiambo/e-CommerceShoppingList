import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  exports: [ RegisterComponent],
  imports: [
    RouterModule.forChild(RegisterRoutes),
    CommonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class RegisterModule { }
