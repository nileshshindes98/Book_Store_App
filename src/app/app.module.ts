import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { DisplayAllBooksModule } from './components/display-all-books/display-all-books.module';
import { GetAllBooksModule } from './components/get-all-books/get-all-books.module';
import { QuickViewBookDataComponent } from './components/quick-view-book-data/quick-view-book-data.component';
import { QuickViewBookDataModule } from './components/quick-view-book-data/quick-view-book-data.module';
import { CardModule } from './components/cart/cart.module';


@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, AppRoutingModule, RouterModule,LoginModule,DashboardModule,GetAllBooksModule,DisplayAllBooksModule,QuickViewBookDataModule,CardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}