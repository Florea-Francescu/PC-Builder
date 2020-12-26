import { Injectable } from '@angular/core';
import { Price } from '../data models/Price';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getLowest(prices: Price[]) {
    let lowest = prices[0];

    for(let price of prices) {
      if(price.price < lowest.price)
        lowest = price;
    }

    return lowest;
  }
}
