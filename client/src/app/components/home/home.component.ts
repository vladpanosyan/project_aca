import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { PortalService } from "src/app/services/portal/portal.service";
import { Observable, Subject, interval } from "rxjs";
import { map, filter, takeUntil } from "rxjs/operators";
// import { formattedError } from '@angular/compiler';
import { timer } from "src/app/HELPERS/backwardTimer";
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  timeOfStart: any;
  started: boolean;
  portal;
  timetoStart = false;
  portalUrlPath = "http://localhost:3000/api/portals/";
  portalData: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private portalService: PortalService,
    private userAuthService: UserAuthService,
    private chatService: ChatService,
    private router: Router,
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
  // extract date from array of portals
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
          // this.started = true;
          return ;
        }
        return t;
      }),
      // filter(item => !!item),
      takeUntil(this.destroy$),
    );
    return timer1;
  }

  foo(time) {
    const countDownDate = new Date(time).getTime();
    return timer(countDownDate);
  }

  startEvent({ counter, ...portal }) {
    alert(9999)
    this.portalService.currentPortalIdSubject.next(portal.id);
    console.log(portal, 88888);
    this.portalService.currentPortalSubject.next(portal);
    this.portalService.startEvent(portal.id, portal.token)
    .subscribe(resp => {
      if (resp) {
        this.chatService.refreshPortalsActivity(portal.id);
        this.router.navigate([`api/portals`, portal.token]);
      }
    });
  }

  ngOnInit() {
    const userId = this.userAuthService.currentUserValue.id;
    this.started = false;
    this.portalData = [];
    // get all portals
    this.portalService.getUserPortals(userId).subscribe(portals => {
      const StartTime = this.extractStartDate(portals);
      this.portalData = this.setupTimes(portals, StartTime);
      console.log(this.portalData, 44444);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.complete();
  }
}
