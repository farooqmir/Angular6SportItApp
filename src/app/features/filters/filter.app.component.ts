import { Component } from '@angular/core';
import { FilteringService } from './components/filters/services/filtering.service';
import { ITEMS } from './components/products/data/items';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.app.component.html',
  styleUrls: ['./filter.app.component.scss']
})
export class FilterAppComponent {
  title = 'filter-feature';


  constructor(public filteringService: FilteringService) {

  }
  fproducts = JSON.parse(JSON.stringify(ITEMS));
  products = JSON.parse(JSON.stringify(ITEMS));

  onFilterChange($event) {
    console.log('console---');
    console.log($event);
    this.products = this.filteringService.applyFilter(this.fproducts, $event.filters, $event.categories);
  }


}
