import { CartItem, Product } from './../Models/app.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public $cartItem = new BehaviorSubject<CartItem[]>([]);

  get existingCartItem() {
    return [...this.$cartItem.value];
  }

  getItemIndexFromCart(item: CartItem) {
    return this.existingCartItem.findIndex((existingItem) => {
      return existingItem.productDetails.id == item.productDetails.id;
    });
  }
  addCartItem(item: CartItem) {
    const items = this.existingCartItem;
    const existingIndex = this.getItemIndexFromCart(item);
    if (existingIndex > -1) {
      items[existingIndex].quantity += 1;
    } else {
      items.push(item);
    }
    this.$cartItem.next(items);
  }
  removeCartItem(item: CartItem) {
    const items = this.existingCartItem;
    const existingIndex = this.getItemIndexFromCart(item);
    if (items[existingIndex].quantity > 1) {
      items[existingIndex].quantity -= 1;
    } else {
      items.splice(existingIndex, 1);
    }
    this.$cartItem.next(items);
  }

  deleteCartItem(item: CartItem) {
    const items = this.existingCartItem;
    const existingIndex = this.getItemIndexFromCart(item);
    items.splice(existingIndex, 1);
    this.$cartItem.next(items);
  }
}
