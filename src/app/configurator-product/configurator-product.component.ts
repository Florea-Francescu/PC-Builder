import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurator-product',
  templateUrl: './configurator-product.component.html',
  styleUrls: ['./configurator-product.component.css']
})
export class ConfiguratorProductComponent implements OnInit {
  @Input('name') name: string;
  @Input('link') link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
