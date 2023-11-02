import { Input, NgModule } from "@angular/core";
import { DisplayAllBooksModule } from "../display-all-books/display-all-books.module";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetAllBooksComponent } from "./get-all-books.component";

 @NgModule({
    declarations:[GetAllBooksComponent],
    imports:[MatCardModule,CommonModule,MatPaginatorModule,DisplayAllBooksModule],
    exports:[GetAllBooksComponent]
 })

 export class GetAllBooksModule {

    @Input() AllBooksData :any

 }