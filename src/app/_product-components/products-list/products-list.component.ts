import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data models/Product';
import { BuildService } from 'src/app/_services/build.service';
import { PricesService } from 'src/app/_services/prices.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input('products') products: Product[];
  @Input('productName') productName: string;
  @Input('singleProductUrl') singleProductUrl: string;

  constructor(
    public pricesService: PricesService,
    public buildService: BuildService
  ) { }

  ngOnInit(): void {
  }
}
