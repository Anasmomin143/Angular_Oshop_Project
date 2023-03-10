import { CartItem } from './../Models/app.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public $cartItem = new BehaviorSubject<CartItem[]>([])


addCartItem(item:CartItem){
const items = []
items.push(...this.$cartItem.value);
items.push(item)
this.$cartItem.next(items)
}
}
