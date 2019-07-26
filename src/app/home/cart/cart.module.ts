import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CartRoutes } from './cart.routes';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent ],
  imports: [
    RouterModule.forChild(CartRoutes),
    CommonModule,
  ]
})
export class CartModule { }
