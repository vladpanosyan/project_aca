import { Component, OnInit } from "@angular/core";
import { PortalService } from "src/app/services/portal/portal.service";
import { Router } from "@angular/router";
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.css"]
})
export class PortalComponent implements OnInit {

  portals: any[];
  constructor(
    private router: Router,
    private portalService: PortalService,
    private userAuthService: UserAuthService
  ) {}

  goToPortal(portalData) {
    this.portalService.currentPortalIdSubject.next(portalData.id);
    this.portalService.currentPortalSubject.next(portalData);
    this.router.navigate(["/portals", portalData.token]);
    // console.log(portalData);
  }
  // [routerLink]="['/api/portals', item.token]"

  ngOnInit() {
    const currentUserId = this.userAuthService.currentUserValue.id;
    this.portalService.getActivePortal(currentUserId)
    .subscribe(portal => {
      this.portals = portal;
      console.log(this.portals, 7777);
    });
    this.portalService.getUserPortals(currentUserId).subscribe(portals => console.log(portals, 7))
    this.userAuthService.isAuthenticated().then(result => {
      if (result) {
        this.userAuthService.setLogin();
      } else {
        this.userAuthService.setLogOut();
      }
    });
  }
}
