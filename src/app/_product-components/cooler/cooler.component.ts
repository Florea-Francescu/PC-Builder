import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CpuCooler } from 'src/app/data models/CpuCooler';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-cooler',
  templateUrl: './cooler.component.html',
  styleUrls: ['./cooler.component.css']
})
export class CoolerComponent implements OnInit {
  cooler: CpuCooler;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getCooler(id)
      .subscribe(cooler => this.cooler = cooler);
  }

}
