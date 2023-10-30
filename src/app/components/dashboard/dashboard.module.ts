import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [DashboardComponent],
    imports: [MatToolbarModule,MatMenuModule],
    exports: [DashboardComponent],
})
export class DashboardModule { }
