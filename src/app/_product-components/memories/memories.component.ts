import { Component, OnInit } from '@angular/core';
import { Memory } from 'src/app/data models/Memory';
import { PricesService } from 'src/app/_services/prices.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {
  memories: Memory[];
  url = 'memory'

  constructor(
    private productsService: ProductsService,
    public pricesService: PricesService
  ) { }

  ngOnInit(): void {
    this.productsService.getMemories()
      .subscribe(memories => this.memories = memories);
  }

}
