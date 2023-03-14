import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CartItem } from 'src/app/Models/app.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: CartItem[] = [];
  constructor(private cs: CartService) {}
  ngOnInit(): void {
    this.getAllCartItems();
  }
  getAllCartItems() {
    this.cs.$cartItem.subscribe(
      (items) => {
        this.cartItems = items;
        console.log('items in cart', this.cartItems);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  removeCartitem(item:CartItem){
    
  }
}
