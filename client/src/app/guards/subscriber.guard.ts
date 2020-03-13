import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { NickNameService } from "src/app/services/nickName/nick-name.service";
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
        // this.userAuthService.isLoggedSubject.next(true);
        this.userAuthService.setLogin();
        this.userAuthService.setPortalToUser(true);
        const portal = await this.portalService.getPortalIdFromToken(next.params.token);
        this.portalService.currentPortalSubject.next(portal);
        this.portalService.currentPortalIdSubject.next(portal.id);
        return true;
      } else {
        // this.userAuthService.isLoggedSubject.next(false);
        this.userAuthService.setLogOut();
        return false;
      }
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
