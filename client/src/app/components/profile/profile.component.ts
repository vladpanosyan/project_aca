import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { ActivatedRoute } from "@angular/router";
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

// import { Observable } from "rxjs";

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
    ) {
    // const userToken = this.route.snapshot.paramMap.get("token");

    // if (userToken) {
    //   this.userService.addToken("access_token", userToken);
    //   this.userService.getUserProfileSocial(userToken).subscribe(data => {
    //     console.log(data, 93939393939);
    //     this.data = data;
    //   });
    // }
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get("id");
    alert(userId);
    if (userId) {
      this.userService.getUserProfile(userId).subscribe(data => {
        console.log(data);
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
