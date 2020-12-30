import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AfStorageService } from '../_services/af-storage.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  imageUrlMotherboard = 'motherboard.jpg';
  imageUrlCPU = 'cpu.jpg';
  imageUrlMemory = 'ram.jpg';
  imageUrlStorage = 'ssd.jpg';
  imageUrlGPU = 'gpu.jpg';
  imageUrlPSU = 'psu.jpg';

  productUrlMotherboard: Observable<string | null>;
  productUrlCPU: Observable<string | null>;
  productUrlMemory: Observable<string | null>;
  productUrlStorage: Observable<string | null>;
  productUrlGPU: Observable<string | null>;
  productUrlPSU: Observable<string | null>;
  
  constructor(private storageService: AfStorageService) { }

  ngOnInit(): void {
    this.productUrlMotherboard = this.storageService.getImgURL(this.imageUrlMotherboard);
    this.productUrlCPU = this.storageService.getImgURL(this.imageUrlCPU);
    this.productUrlMemory = this.storageService.getImgURL(this.imageUrlMemory);
    this.productUrlStorage = this.storageService.getImgURL(this.imageUrlStorage);
    this.productUrlGPU = this.storageService.getImgURL(this.imageUrlGPU);
    this.productUrlPSU = this.storageService.getImgURL(this.imageUrlPSU);
  }

}
