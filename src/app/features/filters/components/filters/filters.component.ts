import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FILTERS} from './data/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() onFilterChange = new EventEmitter();
  filters = FILTERS;

  constructor() { }

  save(category, filter){
    alert();
    console.log(this.filters);
  }

  selectOr(category,filter,filters_,categories){

    if(typeof category.selectCount == 'undefined')
     category.selectCount=0;

    category.selectedValue=filter.value;
    filter.isSelected = true;
    category.selectCount=1;

    category.filters.map(function(filter){
      filter.isSelected = false;
      return filter;
    });
    filter.isSelected = true;

    this.onFilterChange.emit({'category':category, 'filter':filter,'filters':filters_,'categories':categories});
  }

  selectAnd(category, filter, filters_, categories){
    filter.isSelected = !filter.isSelected;

    if (typeof category.selectCount == 'undefined')
     category.selectCount = 0;

    if(!category.selectedValue)
     category.selectedValue='';

    if(filter.isSelected){
      category.selectedValue = category.selectedValue+""+((category.selectedValue)?(","+filter.value):filter.value);
      category.selectCount++;
    }
    else  {
      var remItem = (category.selectCount)>1?(","+filter.value):filter.value;
      category.selectedValue = category.selectedValue.replace(remItem,"");
      category.selectCount--;
    }

    this.onFilterChange.emit({'category':category, 'filter':filter,'filters':filters_,'categories':categories});
  }

  ngOnInit() {
  }

}
