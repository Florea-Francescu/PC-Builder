import { Component, OnInit } from '@angular/core';
import { GPU } from 'src/app/data models/GPU';
import { PricesService } from 'src/app/_services/prices.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.css']
})
export class GpusComponent implements OnInit {
  gpus: GPU[];
  url = "gpu";

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getGPUs()
      .subscribe(gpus => this.gpus = gpus);
  }

}
