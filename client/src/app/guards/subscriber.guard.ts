import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { map } from "rxjs/operators";
import { NickNameService } from "src/app/services/nickName/nick-name.service";
import { Observable, of } from "rxjs";
import { PortalService } from "../services/portal/portal.service";
import { UserAuthService } from "../services/auth/user-auth.service";

@Injectable({
  providedIn: "root"
})
export class SubscriberGuard implements CanActivate {
  constructor(
    private nickService: NickNameService,
    private portalService: PortalService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {
    const userId =
      this.userAuthService.currentUserValue &&
      this.userAuthService.currentUserValue.id;
    if (userId) {
      this.portalService.getUserPortals(userId).subscribe(portals => {
        alert(portals.length + 5)
        this.portalService.currentUserPortals.next(portals);
      });
    }
  }

  getPortalIdFromToken(token) {
    this.portalService.getPortalIdFromToken(token);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(this.userAuthService.UserLoggedStatus, !this.nickService.getNickToken, this.portalService.isPortalisMakeUser(null, next.params.token), 111);
    
    if (
      (this.userAuthService.UserLoggedStatus &&
        !this.nickService.getNickToken) ||
      this.portalService.isPortalisMakeUser(null, next.params.token)
    ) {
      return this.userAuthService.isAuthforGuard().pipe(
        map(result => {
          if (result) {
            console.log(result, 9999999);
            return true;
          }
          return false;
        })
      );
    } else {
      return this.nickService.isSubscriberAuth(next.params.token).pipe(
        map(result => {
          alert(999);
          if (result) {
            this.nickService.nickDataSubject.next(result);
            this.portalService.currentPortalIdSubject.next(result.portalId);
            return true;
          } else if (result === null) {
            alert("result=null");
            this.portalService.portalStatusSubject.next({
              token: next.params.token,
              state: null
            });
            this.router.navigate(["/cover"]);
            return false;
          } else {
            alert("result=false");
            this.portalService.portalStatusSubject.next({
              token: next.params.token,
              state: false
            });
            this.router.navigate(["/cover"]);
            return false;
          }
        })
      );
    }
  }
}
