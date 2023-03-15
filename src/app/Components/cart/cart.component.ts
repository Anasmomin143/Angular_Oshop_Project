import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CartItem } from 'src/app/Models/app.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  totalPrice: number = 0;
  cartItems: CartItem[] = [];
  constructor(private cs: CartService) {}
  ngOnInit(): void {
    this.getAllCartItems();
  }
  getAllCartItems() {
    this.cs.$cartItem.subscribe(
      (items) => {
        this.cartItems = items;
        this.totalPrice =0
        console.log('items in cart', this.cartItems);
        this.cartItems.forEach((item) => {
          this.totalPrice = item.quantity*item.productDetails.price
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  removeFromCart(item: CartItem) {
    this.cs.removeCartItem({
      productDetails: item.productDetails,
      quantity: 1,
    });
  }
  addToCart(item: CartItem) {
      this.cs.addCartItem({
        productDetails: item.productDetails,
        quantity: 1,
      });
  }
  deleteFromCart(item: CartItem) {
    
    this.cs.deleteCartItem(item)
  }
}
