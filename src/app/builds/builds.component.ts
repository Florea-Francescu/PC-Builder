import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AfStorageService } from '../_services/af-storage.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  imageUrlBuild1 = 'build1.png';
  imageUrlBuild2 = 'build2.png';
  imageUrlBuild3 = 'build3.png';
  productUrlBuild1: Observable<string | null>;
  productUrlBuild2: Observable<string | null>;
  productUrlBuild3: Observable<string | null>;

  constructor(private storageService: AfStorageService) { }

  ngOnInit(): void {
    this.productUrlBuild1 = this.storageService.getImgURL(this.imageUrlBuild1);
    this.productUrlBuild2 = this.storageService.getImgURL(this.imageUrlBuild2);
    this.productUrlBuild3 = this.storageService.getImgURL(this.imageUrlBuild3);
  }

}
