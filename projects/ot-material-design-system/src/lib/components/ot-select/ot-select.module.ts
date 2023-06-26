import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtSelectComponent } from './ot-select.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    OtSelectComponent
  ],
  exports: [
    OtSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class OtSelectModule { }
