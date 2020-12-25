import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/data models/Case';
import { PricesService } from 'src/app/_services/prices.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Case[];
  url = "case";

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getCases()
      .subscribe(cases => this.cases = cases);
  }

}
