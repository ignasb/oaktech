import { AfterViewInit, ChangeDetectionStrategy, Component, Injector, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-ot-select',
  templateUrl: './ot-select.component.html',
  styleUrls: ['./ot-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OtSelectComponent),
    multi: true
  }]
})
export class OtSelectComponent implements ControlValueAccessor {
  @Input()
  value!: any;

  @Input()
  label!: string;

  @Input()
  options: any[] = [];

  @Input()
  disabled!: boolean;

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
