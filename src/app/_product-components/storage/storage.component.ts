import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from 'src/app/data models/Storage';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  storage: Storage;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productsService.getStorage(id)
      .subscribe(storage => this.storage = storage);
  }

}
