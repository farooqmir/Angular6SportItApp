import { Filter } from '../model/Filter';

export const FILTERS: Filter[] = [
  { name: 'size', value: '', type: 'size', operation:'OR',filters:[
    { name: 'XL', value: 'XL', type: '', operation:'',filters:null},
    { name: 'L', value: 'L',type: '', operation:'',filters:null},
    { name: 'S', value: 'S',type: '', operation:'',filters:null}
  ]},
  { name: 'color', value: '', type: 'color', operation:'AND',filters:[
    { name: 'red', value: 'red', type: '', operation:'',filters:null},
    { name: 'green', value: 'green', type: '', operation:'',filters:null},
    { name: 'blue', value: 'blue', type: '', operation:'',filters:null}
  ]},
  { name: 'brand', value: '', type: 'brand', operation:'AND',filters:[
    { name: 'polo', value: 'polo', type: '', operation:'',filters:null},
    { name: 'ucb', value: 'ucb', type: '', operation:'',filters:null}
  ]}
     
]  