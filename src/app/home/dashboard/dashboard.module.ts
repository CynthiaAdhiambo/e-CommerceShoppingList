
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    AppMaterialModule,
    RouterModule.forChild(DashboardRoutes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }


