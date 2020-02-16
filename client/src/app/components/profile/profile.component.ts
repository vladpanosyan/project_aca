import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { ActivatedRoute } from "@angular/router";
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userAuthService: UserAuthService
    ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.userService.getUserProfile(userId).subscribe(data => {
        this.data = data;
      });
    }
    this.userAuthService.isAuthenticated().then(result => {
      if (result) {
        this.userAuthService.setLogin();
      } else {
        this.userAuthService.setLogOut();
      }
    });
  }
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  time?: string;
  img?: string;
}
