import { CartService } from './../../services/cart.service';
import { Observable } from 'rxjs';
import { Product } from './../../Models/app.model';
import { ApiService } from './../../services/api.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {

  @Input() productDetails: any;
  @Output() cardtAction = new EventEmitter()

  constructor(private as: ApiService, private route: ActivatedRoute,private cs :CartService) {

  }
  ngOnInit(): void {

  }

  handleAddToCart(){
    this.cardtAction.emit({
      actionType:"ADD",
      item:this.productDetails
    });
  }
  handleRemoveCartItem(){
     this.cardtAction.emit({
       actionType: 'REMOVE',
       item: this.productDetails
     });
  }
}
