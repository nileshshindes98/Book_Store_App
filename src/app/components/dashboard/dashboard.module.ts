import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [DashboardComponent],
    imports: [MatToolbarModule,MatMenuModule,RouterModule,FormsModule],
    exports: [DashboardComponent],
})
export class DashboardModule { }
