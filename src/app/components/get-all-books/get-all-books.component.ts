import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from 'src/app/Services/Book Services/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss'],
})
export class GetAllBooksComponent implements OnInit {
  selectedValue: any = '';
  allBooksData = [];
  constructor(
    private bookService: BookService,
    private dataService: DataService
  ) {}

  SortOption: any[] = [
    { value: 'lowToHigh', viewValue: 'Price: Low to High' },
    { value: 'HighToLow', viewValue: 'Price: High to Low' },
    { value: 'newestArrivals', viewValue: 'Newest Arrivals' },
  ];

  ngOnInit() {
    this.getAllDisplay();
  }

  onSortOptionChange() {
    console.log(this.selectedValue);
    this.sortBooks();
    this.dataService.sendSearchValueSort(this.selectedValue);
  }

  sortBooks() {
    if (this.selectedValue === 'lowToHigh') {
      this.allBooksData = this.allBooksData.sort((a: any, b: any) => {
        return a.discountPrice - b.discountPrice;
      });
    } else if (this.selectedValue === 'HighToLow') {
      this.allBooksData = this.allBooksData.sort((a: any, b: any) => {
        return b.discountPrice - a.discountPrice;
      });
    }
  }
  getAllDisplay() {
    this.bookService.getAllBooks().subscribe((res: any) => {
      // console.log(res.result);
      this.allBooksData = res.result.reverse();
      // console.log(this.allBooksData);
    });
  }
}
