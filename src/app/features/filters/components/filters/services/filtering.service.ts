import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})  

export class FilteringService {

  constructor() { }

  applyFilter(products,filters,categories){
    var include=false,index;
    var filtered = products.filter(function(product){
      var cIndex=0;
      for(;cIndex<categories.length;cIndex++){
        var category = categories[cIndex];
      //categories.some(function(category, index)
          include=false;index=0;
          var fIndex=0;
          for(;fIndex<category.filters.length;fIndex++){
                var filter_ = category.filters[fIndex];
                if(filter_.isSelected){
                   if((category.operation=="AND" && product[category.type] != filter_.value) || (category.operation=="OR" &&  product[category.type] == filter_.value))
                   {
                      break;
                   }
                }
              
              //index++;
          };
          if(category.operation=="AND")
            include = (typeof category.selectCount=='undefined' || category.selectCount<=0) || (category.selectCount>0 && fIndex==category.filters.length);
          else if(category.operation=="OR")
            include = (typeof category.selectCount=='undefined' || category.selectCount<=0) || (category.selectCount>0 && fIndex!=category.filters.length);

          if(!include)
           break;
        };

        return include;
    });

    console.log(filtered);
    return filtered;
  }
}
