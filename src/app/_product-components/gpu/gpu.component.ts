import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GPU } from 'src/app/data models/GPU';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {
  gpu: GPU;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.productsService.getGPU(+id)
      .subscribe(gpu => this.gpu = gpu);
  }

}
