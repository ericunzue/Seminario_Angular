import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer';

@Injectable({
  providedIn: 'root'
})

export class BeerCartService {
  addToCart(beer: Beer) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
