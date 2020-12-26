import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../../data models/Price';

@Component({
  selector: 'app-prices-display',
  templateUrl: './prices-display.component.html',
  styleUrls: ['./prices-display.component.css']
})
export class PricesDisplayComponent implements OnInit {
  @Input('prices') prices: Price[];

  constructor() { }

  ngOnInit(): void {
  }

}
