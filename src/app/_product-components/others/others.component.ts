import { Component, OnInit } from '@angular/core';
import { Other } from 'src/app/data models/Other';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  others: Other[];
  url = 'other';

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getOthers()
      .subscribe(others => this.others = others);
  }

}
