import { CartItem } from './../Models/app.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: CartItem[]=[]

  get CurrentCartItem(){
    return this.cartItem;
  }
addCartItem(item:CartItem){
this.cartItem.push(item);
}
  constructor() {}
}
