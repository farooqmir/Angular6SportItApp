import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-rt',
  template: '<h1>this is RTapp- now route to your respective section</h1>'
})
class RAppDemoComponent {
  title = 'main-app';
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rt'},
  { path: 'rt', pathMatch: 'full', component: RAppDemoComponent }

];

@NgModule({
  declarations: [RAppDemoComponent],
  imports: [


    RouterModule.forRoot(routes, { enableTracing: true }),


  ],
  exports:  [RouterModule]
})
export class AppRoutModule { }
