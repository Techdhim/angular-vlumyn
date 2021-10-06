import { isTrustedTypesSink } from '@angular/compiler/src/schema/trusted_types_sinks';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items : Product[];
  constructor(private _cartService : CartService) { }


  ngOnInit() {
    this.items = this._cartService.getItems();
    window.alert(this.items.length);
  }

}