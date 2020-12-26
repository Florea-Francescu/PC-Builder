import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Memory } from 'src/app/data models/Memory';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  memory: Memory;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getMemory(+id)
      .subscribe(memory => this.memory = memory);
  }

}
