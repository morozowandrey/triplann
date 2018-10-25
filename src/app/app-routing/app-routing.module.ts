import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'planner', pathMatch: 'full' },

  { path: 'planner', loadChildren: '../modules/planner/planner.module#PlannerModule' },
  { path: 'dashboard', loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }