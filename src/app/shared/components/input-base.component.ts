import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  forwardRef,
  Injector,
  OnInit,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';

type OnChangeFn<T> = (value: T) => void;
type OnTouchedFn = () => void;

@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputBaseComponent),
      multi: true
    }
  ]
})
export abstract class InputBaseComponent<T extends (string | Date)>
  implements ControlValueAccessor, OnInit {
  @Output() keyUpped: EventEmitter<Event> = new EventEmitter();
  @Output() focused: EventEmitter<Event> = new EventEmitter();

  value: T;
  onChange: OnChangeFn<T>;
  onTouched: OnTouchedFn;
  disabled = false;
  control: FormControl;

  constructor(
    protected readonly cdr: ChangeDetectorRef,
    protected readonly injector: Injector
  ) {
  }

  ngOnInit() {
    const ngControl = this.injector.get(NgControl);
    ngControl.valueAccessor = this;
    if (ngControl instanceof FormControlName) {
      this.control = this.injector
        .get(FormGroupDirective)
        .getControl(ngControl);
    } else {
      this.control = (ngControl as FormControlDirective).form as FormControl;
    }
  }

  registerOnChange(fn: OnChangeFn<T>) {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedFn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: T) {
    this.value = value;
    this.cdr.markForCheck();
  }
}
