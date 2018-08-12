import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterAppComponent } from '../filter.app.component';


const routes: Routes = [
 { path: 'filters', component: FilterAppComponent }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class FilterAppRoutingModule { }
