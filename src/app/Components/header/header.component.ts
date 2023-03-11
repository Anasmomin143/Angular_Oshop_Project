import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/app.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  cartItems: Product[] = [];
  cartItemsLength: any = 0;
  constructor(
    private router: Router,
    private as: ApiService,
    private _location: Location,
    private cs: CartService
  ) {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userDetails') as any);
    this.cs.$cartItem.subscribe((cartItem) => {
      let totalCount = 0;
      cartItem.forEach((item) => {
        totalCount = totalCount + item.quantity;
      });
      this.cartItemsLength = totalCount;
    });
  }
  LogoutUser() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  backToPrevPage() {
    this._location.back();
  }
}
