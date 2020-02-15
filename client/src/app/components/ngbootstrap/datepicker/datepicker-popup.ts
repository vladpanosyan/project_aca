import { Component, forwardRef, OnInit } from "@angular/core";
import {
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
    this.onChange(this.value);
  }

  public registerOnTouched(fn: any) {
  }

  private transformDate(value: any) {
    return this.value;
  }

  // ngOnInit() {
  //   // this.ngControl = this.injector.get(NgControl);
  // }
}
