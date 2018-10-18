import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRouting } from './generator.routing';

import { GeneratorComponent } from './components/generator/generator.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    GeneratorRouting
  ],
  declarations: [
    GeneratorComponent,
    HomePageComponent
  ]
})
export class GeneratorModule { }
