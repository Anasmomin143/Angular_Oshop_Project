import { CartItem, Product } from './../Models/app.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public $cartItem = new BehaviorSubject<CartItem[]>([]);

  addCartItem(item: CartItem) {
    const items: CartItem[] = [];
    items.push(...this.$cartItem.value);
    const existingIndex = items.findIndex((existingitem) => {
      return existingitem.productDetails.id === item.productDetails.id;
    });
    if (existingIndex > -1) {
      items[existingIndex].quantity += 1;
    } else {
      items.push(item);
    }
    this.$cartItem.next(items);
  }
  removeCartItem(item: Product) {
    const items: CartItem[] = [];
    items.push(...this.$cartItem.value);
    const existingIndex = items.findIndex((existingitem) => {
      return existingitem.productDetails.id === item.id;
    });
    if(items[existingIndex].quantity > 1 ){
      items[existingIndex].quantity -= 1;
    }else{
      items.splice(existingIndex,1);
    }
    this.$cartItem.next(items);
  }
}
