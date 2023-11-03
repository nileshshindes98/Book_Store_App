import { Component, Input ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.scss']
})
export class DisplayAllBooksComponent {
  @Input() AllBooksData: any;
  displayedBooks: any[] = [];
  pageSize: number = 8;

  SearchText: any;

  sortValue: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Add this ViewChild decorator

  constructor(private route: Router, private dataService :DataService) { }

  ngOnInit(): void {
    this.updateDisplayedBooks();
    this.filterBooksAsPerSearch();
    this.sortBooksAsPerPrice();
  }


  filterBooksAsPerSearch() {
    this.dataService.receiveSearchValue.subscribe((res) => {
      this.SearchText = res;
    })
  }

  sortBooksAsPerPrice(){
    this.dataService.receiveSearchValueSort.subscribe((res) => {
      this.sortValue = res;
    })
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

  showBookDetails(book:any){
    this.dataService.sendSearchValue(book);
    this.route.navigateByUrl('/dashboard/quickView');
  }
}
