import { Component,EventEmitter, forwardRef, OnInit, Output } from "@angular/core";
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
export class NgbdDatepickerPopup implements OnInit {
  value: any;
  time: any;
  constructor() {}

  @Output() changedTime = new EventEmitter<string>();

  private onChange: any = () => { };
  private onTouched: any = () => { };

  public bsValueChange(value) {
    this.writeValue(value);
    this.onTouched();
  }

  public setValue() {

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

  ngOnInit() {
    const targetDate = Date.now() + (1 * 60 * 1000);
    const date = new Date(targetDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.value = { year, month, day };
    const hours = (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours());
    const minutes = (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());
    this.time = `${hours}:${minutes}`;
    this.changedTime.emit(this.time);
  }
}
