import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/_services/prices.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {
  storages: Storage[];
  url = "storage";

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getStorages()
      .subscribe(storages => this.storages = storages);
  }

}
