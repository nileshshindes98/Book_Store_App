import { Injectable } from '@angular/core';
import { HttpService } from '../Http Services/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any = localStorage.getItem('token');

  constructor(private HttpService:HttpService) { }

  getAllBooks(){
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.GetService("get/book", true, httpHeadersOption);

  }
}
