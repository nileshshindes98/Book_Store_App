import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  qty: number = 1;
  step = 1;
  hidePlaceOrderButton = false;
  cartBooks = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartBooks();
  }

  increaseQTY() {
    this.qty = this.qty + 1;
  }

  decreaseQTY() {
    if (this.qty > 1) {
      this.qty = this.qty - 1;
    }
  }
  getCartBooks() {
    this.cartService.getCartBooks().subscribe((res) => {
      console.log(res);
    });
  }

  PlaceOrderButton() {
    this.step = 0;
    this.hidePlaceOrderButton = !this.hidePlaceOrderButton;
  }
}
