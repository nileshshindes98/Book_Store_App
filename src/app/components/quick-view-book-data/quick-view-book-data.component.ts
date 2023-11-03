import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quick-view-book-data',
  templateUrl: './quick-view-book-data.component.html',
  styleUrls: ['./quick-view-book-data.component.scss']
})
export class QuickViewBookDataComponent implements OnInit {
  hideCartButton: boolean = false;
  qty: number = 1;

  bookData: any;

  constructor(private dataService: DataService,private route : Router) {}

  ngOnInit(): void {
    this.getBookData();
  }

  getBookData() {
    this.dataService.receiveSearchValue.subscribe((res) => {
      this.bookData = res;
      console.log(this.bookData);
    });
  }

  addToCart() {
    // this.hideCartButton = true;
    
  }

  increaseQTY() {
    this.qty = this.qty + 1;
  }

  decreaseQTY() {
    if (this.qty > 1) {
      this.qty = this.qty - 1;
    }
  }
  showcart(){
    this.route.navigateByUrl('/dashboard/cart')
  }
}
