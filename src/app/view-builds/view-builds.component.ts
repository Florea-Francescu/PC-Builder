import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBuild } from '../data models/UserBuild';
import { BuildService } from '../_services/build.service';
import { PricesService } from '../_services/prices.service';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-view-builds',
  templateUrl: './view-builds.component.html',
  styleUrls: ['./view-builds.component.css']
})
export class ViewBuildsComponent implements OnInit {
  myBuild: UserBuild;

  constructor( private productsService: BuildService, public priceService: PricesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log(id);
    this.productsService.getMyBuild(id)
      .subscribe((myBuild: UserBuild) => {
        this.myBuild = myBuild;
        console.log(myBuild);
      });
    }
      

}
