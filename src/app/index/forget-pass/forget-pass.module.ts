import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPassComponent } from './forget-pass.component';
import { RouterModule } from '@angular/router';
import { ForgetPassRoutes } from './forget-pass.routes';

@NgModule({
  declarations: [ForgetPassComponent],
  exports: [ForgetPassComponent ],
  imports: [
    RouterModule.forChild(ForgetPassRoutes),
    CommonModule,
  ]
})
export class ForgetPassModule { }
