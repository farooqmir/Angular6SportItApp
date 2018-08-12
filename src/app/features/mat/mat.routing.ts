import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CMatButtonComponent } from './components/buttons-indicators/button/button.component';
const routes: Routes = [
 {
    path: 'mat',
    component: DashboardComponent,
    children: [
        { path: 'buttons', component: CMatButtonComponent}
    ]
 }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class MatXAppRoutingModule { }
