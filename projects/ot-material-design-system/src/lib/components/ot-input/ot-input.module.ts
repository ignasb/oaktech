import { NgModule } from "@angular/core";
import { OtInputComponent } from "./ot-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    OtInputComponent
  ],
  exports: [
    OtInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ]
})
export class OtInputModule { }
