import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products = JSON.parse(JSON.stringify(ITEMS));
  @Input() products;

  constructor() { }

  ngOnInit() {

  }

}
