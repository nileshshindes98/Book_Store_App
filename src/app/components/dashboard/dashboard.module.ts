import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DashboardComponent],
    imports: [MatToolbarModule,MatMenuModule,RouterModule],
    exports: [DashboardComponent],
})
export class DashboardModule { }
