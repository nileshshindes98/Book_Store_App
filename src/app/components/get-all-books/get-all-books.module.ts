import { Input, NgModule } from "@angular/core";
import { DisplayAllBooksModule } from "../display-all-books/display-all-books.module";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetAllBooksComponent } from "./get-all-books.component";
import { FormsModule } from "@angular/forms";

 @NgModule({
    declarations:[GetAllBooksComponent],
    imports:[MatCardModule,CommonModule,MatPaginatorModule,DisplayAllBooksModule,FormsModule],
    exports:[GetAllBooksComponent]
 })

 export class GetAllBooksModule {

    @Input() AllBooksData :any

 }