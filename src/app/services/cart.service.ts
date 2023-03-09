import { CartItem } from './../Models/app.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CartItem: CartItem[]=[]

  get CurrentCartItem(){
    return this.CartItem;
  }
addCartItem(item:CartItem){
this.CartItem.push(item);
}
  constructor() {}
}
