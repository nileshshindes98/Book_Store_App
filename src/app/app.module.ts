import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';


@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, LoginModule,DashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}