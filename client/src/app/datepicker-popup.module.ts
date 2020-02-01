import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdDatepickerPopup } from "./components/ngbootstrap/datepicker/datepicker-popup";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, BrowserModule],
  declarations: [NgbdDatepickerPopup],
  providers: [DatePipe],
  exports: [NgbdDatepickerPopup],
  bootstrap: []
})
export class NgbdDatepickerPopupModule {}
