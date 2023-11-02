import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { DisplayAllBooksModule } from './components/display-all-books/display-all-books.module';
import { GetAllBooksModule } from './components/get-all-books/get-all-books.module';

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, RouterModule,LoginModule,DashboardModule,GetAllBooksModule,DisplayAllBooksModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}