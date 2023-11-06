import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookData = new BehaviorSubject<any>(null);
  bookData$ = this.bookData.asObservable();

  private messageSource = new BehaviorSubject([]);
  receiveSearchValue = this.messageSource.asObservable();

  private messageSourceSort = new BehaviorSubject([]);
  receiveSearchValueSort = this.messageSourceSort.asObservable();

  constructor() { }

  setBookData(data: any) {
    this.bookData.next(data)
  }

  sendSearchValue(data: any) {
    console.log(data);

    this.messageSource.next(data)
  }
  sendSearchValueSort(data: any) {
    console.log(data);

    this.messageSourceSort.next(data)
  }

}
