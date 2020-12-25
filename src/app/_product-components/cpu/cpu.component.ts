import { Component, OnInit } from '@angular/core';
import { CPU } from '../../data models/CPU';
import { ProductsService } from '../../_services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {
  cpu: CPU;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getCPU(+id)
      .subscribe((cpu: CPU) => {
        this.cpu = cpu;
      },
      error => {
        console.log("Couldn't get CPU!");
      });
  }

}
