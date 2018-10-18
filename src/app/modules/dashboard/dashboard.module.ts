import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dasboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }