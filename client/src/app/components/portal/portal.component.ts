import { Component, OnInit } from "@angular/core";
import { PortalService } from "src/app/services/portal/portal.service";
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.css"]
})
export class PortalComponent implements OnInit {

  portals: any[];
  constructor(
    private portalService: PortalService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit() {
    const currentUserId = this.userAuthService.currentUserValue.id;
    this.portalService.getActivePortal(currentUserId)
    .subscribe(portal => {
      this.portals = portal;
      console.log(this.portals);
    });
  }
}
