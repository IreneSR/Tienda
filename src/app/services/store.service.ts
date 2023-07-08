import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myWishList: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.myWishList.push(product);
  }

  getWishList() {
    return this.myWishList;
  }

  getTotal() {
    return this.myWishList.reduce((sum, item) => sum + item.price, 0);
  }
}
