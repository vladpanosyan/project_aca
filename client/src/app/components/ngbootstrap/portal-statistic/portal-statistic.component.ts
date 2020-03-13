import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-portal-statistic",
  templateUrl: "./portal-statistic.component.html",
  styleUrls: ["./portal-statistic.component.css"],
  animations: [
    // Define animation here

    trigger("myfirstanimation", [
      state(
        "small",
        style({
          height: "0px"
        })
      ),
      state(
        "large",
        style({
          height: "100px"
        })
      ),
      transition("small <=> large", animate("400ms ease-in"))
    ])
  ]
})
export class PortalStatisticComponent implements OnInit {
  constructor() {}


  // animateMe() {
  //   this.state = this.state === "small" ? "large" : "small";
  // }

  ngOnInit() {}
}
