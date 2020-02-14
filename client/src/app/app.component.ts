import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(
    private socket: Socket
    ) {}
  ngOnInit() {
    this.socket.connect();
  }
}
