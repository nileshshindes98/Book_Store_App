import { Input, NgModule } from "@angular/core";
import { DisplayAllBooksComponent } from "./display-all-books.component";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchFilterPipe } from "src/app/Pipes/Search-Filter pipe/search-filter.pipe";
import { SortPipe } from "src/app/Pipes/sortPipe/sort.pipe";
 @NgModule({
    declarations:[DisplayAllBooksComponent,SearchFilterPipe,SortPipe],
    imports:[MatCardModule,CommonModule,MatPaginatorModule],
    exports:[DisplayAllBooksComponent]
 })

 export class DisplayAllBooksModule {

 
 }