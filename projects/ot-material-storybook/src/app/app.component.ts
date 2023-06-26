import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ot-material-storybook';
  fg = new FormGroup({
    helloWorldControl: new FormControl('Testing 123...')
  })

  constructor() {
    this.fg.controls.helloWorldControl.valueChanges.subscribe((val) => {
      console.log(val);
    })
  }
}
