import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-ot-input',
  templateUrl: './ot-input.component.html',
  styleUrls: ['./ot-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OtInputComponent),
    multi: true
  }]
})
export class OtInputComponent implements ControlValueAccessor {
  value: any;

  @Input()
  disabled!: boolean;

  @Input()
  label!: string;

  @Input()
  placeholder!: string;

  onChange: any = () => { }

  onTouched: any = () => { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onValueChange(value: any): void {
    this.writeValue(value);
    this.onChange(value);
  }
}
