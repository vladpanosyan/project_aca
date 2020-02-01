import { Component, forwardRef, Injector, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: "ngbd-datepicker-popup",
  templateUrl: "./datepicker-popup.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgbdDatepickerPopup),
      multi: true
    }
  ]
})
export class NgbdDatepickerPopup {
  value: any;
  // private ngControl: NgControl;
  constructor() {}

  private onChange: any = () => { };
  private onTouched: any = () => { };

  public bsValueChange(value) {
    this.writeValue(value);
    this.onTouched();
  }

  public writeValue(value: any) {
    this.value = this.transformDate(this.value);
    this.onChange(this.value);
  }
  public registerOnChange(fn: any) {
    this.onChange = fn;
    this.onChange(this.value); // for OnInit cycle
  }

  public registerOnTouched(fn: any) {
    // this.onTouched = fn;
  }

  //   public setDisabledState(isDisabled: boolean) {
  //     //
  //   }

  private transformDate(value: any) {
    // console.log(value, 999);
    return this.value;
  }

  // ngOnInit() {
  //   // this.ngControl = this.injector.get(NgControl);
  // }
}
