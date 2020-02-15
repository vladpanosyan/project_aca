import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "./../../../HELPERS/mutch";
import { User } from "./../../../models/user";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public user: any;
  registerForm: FormGroup;
  submited: false;
  loggedIn: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: UserAuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [null, [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confPassword")
      });
    this.authService.socialStateCheck();
  }

  detectClass(field) {
    if (
      this.registerForm.controls[field].dirty &&
      this.registerForm.controls[field].invalid
    ) {
      return "no_valid";
    } else if (
      this.registerForm.controls[field].dirty &&
      this.registerForm.controls[field].valid
    ) {
      return "is_valid";
    }
  }

  signInWithFB(): void {
    this.authService.signInWithFB();
  }

  onSubmit() {
    const userData = this.registerForm.value;
    delete userData.confPassword;

    this.userService.AddUser(userData).subscribe(
      (data: any) => {
        if (data.firstName) {
          this.userService.addToken("currentUser", data);
          this.authService.refresh(data);
          this.router.navigate([`/users/profile`, data.id]);
        }
      },
      error => {
        this.user = error.userData;
      }
    );
  }
}
