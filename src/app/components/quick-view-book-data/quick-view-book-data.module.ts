import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { QuickViewBookDataComponent } from './quick-view-book-data.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    declarations: [QuickViewBookDataComponent],
    imports: [MatTabsModule,MatCardModule,BrowserAnimationsModule,MatFormFieldModule,FormsModule,
        ReactiveFormsModule,MatIconModule,MatInputModule,HttpClientModule,MatSnackBarModule,MatDividerModule
    ],
    exports: [QuickViewBookDataComponent],
})
export class QuickViewBookDataModule { }
