import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dasboard.routing';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [
    HeaderComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }