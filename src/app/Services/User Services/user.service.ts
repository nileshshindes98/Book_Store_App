import { Injectable } from '@angular/core';
import { HttpService } from '../Http Services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any = localStorage.getItem('token');

  constructor(private HttpService: HttpService) { }

  
  login(reqdata: any) {
    return this.HttpService.PostService("login", reqdata, false, {});
  }

  registerNewUser(reqData: any) {
    
    return this.HttpService.PostService("registration", reqData, false, {});
  }


}
