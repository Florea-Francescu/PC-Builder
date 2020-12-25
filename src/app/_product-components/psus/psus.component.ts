import { Component, OnInit } from '@angular/core';
import { PSU } from 'src/app/data models/PSU';
import { PricesService } from 'src/app/_services/prices.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-psus',
  templateUrl: './psus.component.html',
  styleUrls: ['./psus.component.css']
})
export class PsusComponent implements OnInit {
  psus: PSU[];
  url = "psu";

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getPSUs()
      .subscribe(psus => this.psus = psus);
  }

}
