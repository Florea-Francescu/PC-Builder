import { Component, OnInit } from '@angular/core';
import { Motherboard } from '../../data models/Motherboard';
import { ProductsService } from '../../_services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {
  motherboard: Motherboard;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getMotherboard(+id)
      .subscribe(motherboard => this.motherboard = motherboard);
  }

}
