import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRouting } from './planner.routing';

import { GeneratorComponent } from './components/generator/generator.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    PlannerRouting
  ],
  declarations: [
    GeneratorComponent,
    HomePageComponent
  ]
})
export class PlannerModule { }
