import { Input, NgModule } from "@angular/core";
import { DisplayAllBooksComponent } from "./display-all-books.component";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

 @NgModule({
    declarations:[DisplayAllBooksComponent],
    imports:[MatCardModule,CommonModule,MatPaginatorModule],
    exports:[DisplayAllBooksComponent]
 })

 export class DisplayAllBooksModule {

    @Input() AllBooksData :any

    displayedBooks: any[] = [];
    pageSize: number = 12;
    pageSizeOptions: number[] = [12];
  
    constructor() { }
  
    ngOnInit(): void {
      this.updateDisplayedBooks(0);
    }
  
    onPageChange(event: any): void {
      const startIndex = event.pageIndex * this.pageSize;
      this.updateDisplayedBooks(startIndex);
    }
  
    updateDisplayedBooks(startIndex: number): void {
      this.displayedBooks = this.AllBooksData.slice(startIndex, startIndex + this.pageSize);
    }
 }