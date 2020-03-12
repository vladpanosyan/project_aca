import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { PortalService } from "src/app/services/portal/portal.service";
import { Subject, interval } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { timer } from "src/app/HELPERS/backwardTimer";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { UserService } from "src/app/services/user/user.service";
import { ChatService } from "src/app/services/chat/chat.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;
  timeOfStart: any;
  started: boolean;
  portal;
  timetoStart = false;
  portalUrlPath = "http://localhost:3000/portals/";
  portalData: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private portalService: PortalService,
    private userAuthService: UserAuthService,
    private userService: UserService,
    private chatService: ChatService,
    private router: Router
  ) {
    this.portalData = [];

    this.portalService.portal.subscribe((x: any) => {
      this.portal = x;
      const StartTime = this.extractStartDate([x]);
      if (!StartTime[0]) {
        return;
      }
      const addedPortal = this.setupTimes([x], StartTime);
      this.portalData.push(addedPortal[0]);
    });
  }
  extractStartDate(portals) {
    return portals.reduce((arr, item) => {
      return arr.push(item.start), arr;
    }, []);
  }

  setupTimes(portals, time) {
    return portals.reduce((arr, element, ind) => {
      const timeStart = element.start;
      const localDate = this.makeCurrentDate(timeStart);
      element.counter = this.initCounter(time[ind]);
      element.start = localDate;
      return arr;
    }, portals);
  }

  makeCurrentDate(time) {
    const date = new Date(time);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatter = new Intl.DateTimeFormat("en-Us", {
      timeZone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    return formatter.format(date);
  }

  initCounter(time) {
    const timer1 = interval(1000).pipe(
      map(_ => {
        const t = this.foo(time);
        if (!t) {
          return;
        }
        return t;
      }),
      takeUntil(this.destroy$)
    );
    return timer1;
  }

  foo(time) {
    const countDownDate = new Date(time).getTime();
    return timer(countDownDate);
  }

  startEvent({ counter, ...portal }) {
    this.portalService.currentPortalIdSubject.next(portal.id);
    this.portalService.currentPortalSubject.next(portal);
    this.portalService.startEvent(portal.id, portal.token).subscribe(resp => {
      if (resp) {
        this.chatService.refreshPortalsActivity(portal.id);
        this.router.navigate([`/portals`, portal.token]); 
      }
    });
  }

  ngOnInit() {
    const userId = this.userAuthService.currentUserValue.id;
    this.started = false;
    this.portalData = [];

    this.portalService.getUserPortals(userId).subscribe(portals => {
      const StartTime = this.extractStartDate(portals);
      this.portalData = this.setupTimes(portals, StartTime);
    });

    this.userService.getUserProfile(userId).subscribe(data => {
      this.data = data;
    });

    this.userAuthService.isAuthenticated().then(result => {
      if (result) {
        this.userAuthService.setLogin();
      } else {
        this.userAuthService.setLogOut();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
