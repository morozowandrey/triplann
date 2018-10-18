import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorComponent } from './components/generator/generator.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { 
        path: 'hello',
        component: HomePageComponent
    },
    { 
        path: 'generator',
        component: GeneratorComponent
    },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class GeneratorRouting { }
