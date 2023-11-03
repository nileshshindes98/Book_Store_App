import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchInput: string = '';
  constructor (private router:Router, private dataService:DataService ){}
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
  searchBook() {
    this.dataService.sendSearchValue(this.searchInput);
  }
}
