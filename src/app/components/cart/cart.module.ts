import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    declarations: [CartComponent],
    imports: [RouterModule,MatExpansionModule,MatCardModule],
    exports: [CartComponent],
})
export class CardModule { }
