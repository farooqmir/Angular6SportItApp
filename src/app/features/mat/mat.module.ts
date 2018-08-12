import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatXAppRoutingModule } from './mat.routing';
  import { CMatButtonComponent } from './components/buttons-indicators/button/button.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CMatButtonComponent
  ],
  imports: [
    BrowserModule,
    MatXAppRoutingModule
 ]
})
export class MatXAppModule { }
