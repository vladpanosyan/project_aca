import { Component, OnInit } from "@angular/core";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  currentUser;
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    public authService: UserAuthService,
    ) {
      this.authService.currentUser.subscribe((x: any) => {
        this.currentUser = x;
      });
      this.authService.isLoggedIn.subscribe((x: boolean) => {
        this.isLoggedIn = x;
      });
  }
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
