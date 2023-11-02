import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book Services/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss'],
})
export class GetAllBooksComponent implements OnInit {
  selectedValue: any = '';
  allBooksData = [];
  constructor(private bookService: BookService) {}

  SortOption: any[] = [
    { value: 'lowToHigh', viewValue: 'Price: Low to High' },
    { value: 'HighToLow', viewValue: 'Price: High to Low' },
    { value: 'newestArrivals', viewValue: 'Newest Arrivals' },
  ];

  ngOnInit() {
    this.getAllDisplay();
  }

  getAllDisplay() {
    this.bookService.getAllBooks().subscribe((res: any) => {
      console.log(res.result);
      this.allBooksData = res.result.reverse();
      console.log(this.allBooksData);
    });
  }


}
