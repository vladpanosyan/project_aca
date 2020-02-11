import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "angularx-social-login";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "./../../models/user";
import {
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angularx-social-login";
import { PortalService } from '../portal/portal.service';
@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  portalIsMakeUser = false;

  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public isLoggedSubject: BehaviorSubject<boolean>;
  public isLoggedIn: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private socialAuthService: AuthService,
    private userService: UserService,
    private portalService: PortalService,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();

    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
    this.isLoggedIn = this.isLoggedSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get UserLoggedStatus(): boolean {
    return this.isLoggedSubject.value;
  }

isUserInOwnPortal() {
  if (
    this.UserLoggedStatus &&
    this.portalService.isPortalisMakeUser(this.portalService.getPortalId, null) || this.portalIsMakeUser
  ) {
    return  true;
  } else {
    return false;
  }
}

setPortalToUser(bool) {
  this.portalIsMakeUser = bool;
}

isAuthforGuard(): Observable<any> {
  const accessToken = this.currentUserValue && this.currentUserValue.access_token;
  if (accessToken) {
    const res = this.http.post("api/users/checkTokenValid", { accessToken });
    return res;
  }
}

  async isAuthenticated(): Promise<any> {
    // tslint:disable-next-line: variable-name
    const accessToken = this.currentUserValue && this.currentUserValue.access_token;
    if (accessToken) {
      const res = await this.http
        .post("api/users/checkTokenValid", { accessToken })
        .toPromise();
      if (res) {
        return res;
      } else {
        this.logout();
      }
    }
    return Promise.resolve(null);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`api/users/login`, { username, password })
      .pipe(
        map(user => {
          if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.isLoggedSubject.next(true);
          }
          return user;
        })
      );
  }

  regWithFace(accesToken): Observable<any> {
    console.log("inside user-auth service", 7401);
    return this.http.post("api/users/auth/facebook", {
      access_token: accesToken
    });
  }
  socialStateCheck() {
    this.socialAuthService.authState // avtomat berume token@
      .subscribe(
        user => {
          if (user) {
            this.regWithFace(user.authToken).subscribe((response: any) => {
              this.userService.addToken("currentUser", response);
              this.refresh(response);
              this.router.navigate([`/users/profile`, response.id]);
            });
          }
        },
        error => console.log(error, 85858585)
      );
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }

  refresh(data) {
    this.currentUserSubject.next(data);
    this.isLoggedSubject.next(true);
  }

  setLogin() {
    this.isLoggedSubject.next(true);
  }
  setLogOut() {
    this.isLoggedSubject.next(false);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.signOut();
    this.currentUserSubject.next(null);
    this.isLoggedSubject.next(false);
  }
}
