import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterAppComponent } from './filter.app.component';
import { FiltersComponent } from './components/filters/filters.component';

import { ProductsComponent } from './components/products/products.component';
import { FilteringService } from './components/filters/services/filtering.service';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FilterAppRoutingModule } from './shared/filter.routing';

@NgModule({
  declarations: [
    FilterAppComponent,
    FiltersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
     MatButtonModule,
     MatCheckboxModule,
     FilterAppRoutingModule
    //  ,
    //  FilterAppRoutingModule
  ],
  providers: [FilteringService]
})
export class FilterAppModule { }
