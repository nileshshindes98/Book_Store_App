import { Injectable } from '@angular/core';
import { HttpService } from '../Http Services/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: any;

  constructor(private HttpService: HttpService) {}

  getCartBooks() {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        token: this.token,
      }),
    };
    return this.HttpService.GetService(
      'get_cart_items',
      true,
      httpHeadersOption
    );
  }
}
