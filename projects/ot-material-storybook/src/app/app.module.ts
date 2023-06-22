import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtInputModule } from 'ot-material-design-system';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    OtInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
