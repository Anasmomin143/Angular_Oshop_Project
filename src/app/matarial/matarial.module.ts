import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    NgxSpinnerModule,
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    NgxSpinnerModule,
  ],
})
export class MatarialModule {}
