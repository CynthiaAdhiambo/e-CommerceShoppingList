import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPassComponent } from './forget-pass.component';
import { RouterModule } from '@angular/router';
import { ForgetPassRoutes } from './forget-pass.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ForgetPassComponent],
  exports: [ForgetPassComponent ],
  imports: [
    RouterModule.forChild(ForgetPassRoutes),
    CommonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ForgetPassModule { }
