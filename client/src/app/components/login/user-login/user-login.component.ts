import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { UserService } from "src/app/services/user/user.service";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PortalService } from 'src/app/services/portal/portal.service';
import { SocialUser, GoogleLoginProvider, AuthService } from 'angularx-social-login';

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submited: false;
  error = "";
  info = true;
  activatedPortal = false;

  signinForm: FormGroup;
  public user: SocialUser;
  public loggedIn: boolean;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private googleAuthService: AuthService,
    private fbAuthService: AuthService,
    private portalService: PortalService,
  ) {
    this.googleAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.fbAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  userLogin() {
    const { email, password } = this.loginForm.value;
    this.userAuthService.login(email, password).subscribe(
      user => {
        if (user.activated) {
          this.router.navigate(["/users/home"]);
        } else {
          this.info = this.portalService.isActivatedPortall;
          this.router.navigate(["/users/login"]);
        }
      },
      error => {
        if (error.status) {
          this.error = error.error.loginData;
        }
      }
    );
  }

  signInWithGoogle() {
    this.userAuthService.signWithSocialGoogle()
   }

  signInWithFB() {
    this.userAuthService.signInWithFB();
  }

  detectClass(field) {
    if (
      this.loginForm.controls[field].dirty &&
      this.loginForm.controls[field].invalid
    ) {
      return "no_valid";
    } else if (
      this.loginForm.controls[field].dirty &&
      this.loginForm.controls[field].valid
    ) {
      return "is_valid";
    }
  }

  resetErrorLoginMessage() {
    this.error = "";
    this.info = true;
    this.activatedPortal = false;
  }
  ngOnInit() {
    const val = this.portalService.isActivatedPortall;
    const bal = this.portalService.isactivePSubV;
    this.info = !val && this.info;
    this.activatedPortal = !val && bal;

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
}
