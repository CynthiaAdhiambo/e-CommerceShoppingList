import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CartRoutes } from './cart.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent ],
  imports: [
    RouterModule.forChild(CartRoutes),
    CommonModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CartModule { }
