import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PSU } from 'src/app/data models/PSU';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-psu',
  templateUrl: './psu.component.html',
  styleUrls: ['./psu.component.css']
})
export class PsuComponent implements OnInit {
  psu: PSU;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getPSU(+id)
      .subscribe(psu => this.psu = psu);
  }

}
