import { Component, Input, OnInit } from '@angular/core';
import {Product, products} from '../products';
import {ActivatedRoute} from '@angular/router';
import {CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route : ActivatedRoute,
              private _cartService : CartService) {}
  @Input() product: Product | undefined;
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRouteParam = Number( routeParams.get('productId'));
    this.product = products.find(product=>product.id === productIdFromRouteParam);
  }

  addToCart(product: Product)
  {
    this._cartService.addToCart(this.product);
    window.alert("product added to cart")
  }
}
