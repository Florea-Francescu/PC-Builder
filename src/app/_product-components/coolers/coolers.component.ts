import { Component, OnInit } from '@angular/core';
import { Price } from 'src/app/data models/Price';

import { AngularFirestore } from '@angular/fire/firestore';
import { CpuCooler } from 'src/app/data models/CpuCooler';
import { ProductsService } from 'src/app/_services/products.service';

export interface noIdCooler {
  name: string;
  fanSize: string;
  height: string;
  sockets: string[];
  prices: Price[];
}

@Component({
  selector: 'app-coolers',
  templateUrl: './coolers.component.html',
  styleUrls: ['./coolers.component.css']
})
export class CoolersComponent implements OnInit {
  url = 'cooler';
  coolers: CpuCooler[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getCoolers()
      .subscribe(coolers => this.coolers = coolers);
  }

}
