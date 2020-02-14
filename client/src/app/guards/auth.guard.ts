import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { UserAuthService } from "./../services/auth/user-auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserAuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isValid = await this.authenticationService.isAuthenticated();
    if (isValid) {
      return true;
    } else {
      this.router.navigate(["/users/login"], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
