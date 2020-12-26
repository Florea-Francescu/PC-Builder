import { Component, OnInit } from '@angular/core';
import { BuildService } from 'src/app/_services/build.service';
import { CPU } from '../../data models/CPU';
import { PricesService } from '../../_services/prices.service';
import { ProductsService } from '../../_services/products.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.css']
})
export class CpusComponent implements OnInit {
  cpus: CPU[];
  url = "cpu"

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getCPUs()
      .subscribe(cpus => this.cpus = cpus);
  }

}
