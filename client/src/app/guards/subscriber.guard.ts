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
  currentUserId;
  constructor(
    private nickService: NickNameService,
    private portalService: PortalService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {
    this.currentUserId = this.userAuthService.currentUserValue ? this.userAuthService.currentUserValue.id : null;
  }

  // getPortalIdFromToken(token) {
  //   this.portalService.getPortalIdFromToken(token);
  // }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const portals = await this.portalService
      .getUserPortals(this.currentUserId)
      .toPromise();
    this.portalService.currentUserPortals.next(portals);

    if (
      (this.userAuthService.UserLoggedStatus &&
        !this.nickService.getNickToken) ||
      this.portalService.isPortalisMakeUser(null, next.params.token)
    ) {
      const result = await this.userAuthService.isAuthforGuard().toPromise();
      if (result) {
        this.userAuthService.isLoggedSubject.next(true);
        this.userAuthService.setPortalToUser(true);
        const portal = await this.portalService.getPortalIdFromToken(next.params.token);
        console.log(portal, 7401)
        this.portalService.currentPortalSubject.next(portal);
        alert(typeof portal.id )
        this.portalService.currentPortalIdSubject.next(portal.id);
        return true;
      }
      return false;
    } else {
      this.userAuthService.setPortalToUser(false);
      const result = await this.nickService
        .isSubscriberAuth(next.params.token)
        .toPromise();
      if (result) {
        this.nickService.nickDataSubject.next(result);
        this.portalService.currentPortalIdSubject.next(result.portalId);
        const portal = await this.portalService.getPortalIdFromToken(next.params.token);
        this.portalService.currentPortalSubject.next(portal);
        return true;
      } else if (result === null) {
        this.portalService.portalStatusSubject.next({
          token: next.params.token,
          state: null
        });
        this.router.navigate(["/cover"]); 
        return false;
      } else {
        this.portalService.portalStatusSubject.next({
          token: next.params.token,
          state: false
        });
        this.router.navigate(["/cover"]);
        return false;
      }
    }
  }
}
