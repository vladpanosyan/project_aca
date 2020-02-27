import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-user-register-validate",
  templateUrl: "./user-register-validate.component.html"
})
export class UserRegisterValidateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) {
    const token = this.route.snapshot.paramMap.get("token");
    this.userService
      .checkEmailIsValid(token)
      .subscribe(
        res => {
          router.navigate(["users/login"]);
        },
        err => {
          router.navigate(["users/register"]);
        }
        );
  }

  ngOnInit() {}
}
