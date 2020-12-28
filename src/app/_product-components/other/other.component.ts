import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Other } from 'src/app/data models/Other';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  other: Other;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getOther(id)
      .subscribe(other => this.other = other);
  }

}
