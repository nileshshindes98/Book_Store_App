import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { QuickViewBookDataComponent } from './components/quick-view-book-data/quick-view-book-data.component';
import { AuthGuard } from './AuthGuard/auth-guard.guard';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard], // Protect the dashboard route
    children: [
      { path: '', component: GetAllBooksComponent },
      { path: 'quickView', component: QuickViewBookDataComponent,canActivate:[AuthGuard] },
      { path: 'cart', component: CartComponent,canActivate:[AuthGuard] },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
