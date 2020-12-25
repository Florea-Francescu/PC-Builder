import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../../data models/Motherboard';
import { PricesService } from '../../_services/prices.service';
import { ProductsService } from '../../_services/products.service';

@Component({
  selector: 'app-motherboards',
  templateUrl: './motherboards.component.html',
  styleUrls: ['./motherboards.component.css']
})
export class MotherboardsComponent implements OnInit {
  motherboards: Motherboard[];
  url = "motherboard";

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getMotherboards()
      .subscribe(motherboards => this.motherboards = motherboards);
  }

}
