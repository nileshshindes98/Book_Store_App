import { Component, Input ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.scss']
})
export class DisplayAllBooksComponent {
  @Input() AllBooksData: any;
  displayedBooks: any[] = [];
  pageSize: number = 8;

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add this ViewChild decorator

  constructor() { }

  ngOnInit(): void {
    this.updateDisplayedBooks();
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.updateDisplayedBooks();
    });
  }

  updateDisplayedBooks(): void {
    const startIndex = this.paginator.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedBooks = this.AllBooksData.slice(startIndex, endIndex);
  }
}
