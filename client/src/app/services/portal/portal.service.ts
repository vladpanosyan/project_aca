import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { BehaviorSubject, Subject } from "rxjs";
import { map } from "rxjs/operators";

interface Port {
  token: string;
  state: boolean;
}

@Injectable({
  providedIn: "root"
})
export class PortalService {
  portalSubject: BehaviorSubject<any>;
  portal: Observable<any>;

  portalStatusSubject: Subject<Port>;
  portalState: Observable<Port>;

  currentPortalIdSubject: BehaviorSubject<string>;
  currentPortalSubject: BehaviorSubject<any>;

  currentUserPortals: BehaviorSubject<any>;

  portalFinishedSubject: Subject<boolean>;
  portalFinished: Observable<boolean>;

  // isPortalOfUser: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.portalSubject = new BehaviorSubject<any>({});
    this.portal = this.portalSubject.asObservable();

    this.portalStatusSubject = new Subject();
    this.portalState = this.portalStatusSubject.asObservable();

    this.currentPortalIdSubject = new BehaviorSubject("");
    this.currentPortalSubject = new BehaviorSubject({});

    this.currentUserPortals = new BehaviorSubject([]);

    this.portalFinishedSubject = new Subject();
    this.portalFinished = this.portalFinishedSubject.asObservable();

    // this.isPortalOfUser = new BehaviorSubject(false);
  }

  get getPortalId() {
    return this.currentPortalIdSubject.value;
  }

  get getCurentUserPortals() {
    return this.currentUserPortals.value;
  }

  get getCurrentPortal() {
    return this.currentPortalSubject.value;
  }

  // get getIsPortalofUser {
  //   return this.isPortalOfUser.value;
  // }

  addPortal(data: any): Observable<any> {
    return this.http
      .post<any>("api/portals/addPortal", data)
      .pipe(map(portal => {
        this.portalSubject.next(portal);
        this.currentPortalIdSubject.next(portal.id);
      }));
  }
  startEvent(id, token): Observable<any> {
    return this.http
    .put<any>(`api/portals/${token}`, {id}); // xi token@ query.param ???
  }

  checkPermision(token, portalId): Promise<any> {
    return this.http
    .post(`api/portals/checkToken`, { token, portalId })
    .toPromise();
  }

  getAll(): Observable<any> {
    return this.http
    .get("api/portals/getAll");
  }

  getUserPortals(userId): Observable<any> {
    return this.http
    .post("api/portals/getUserPortals", {userId}).pipe(
      map( portals => {
        this.currentUserPortals.next(portals);
        return portals;
      })
    );
  }

  getActivePortal(currentUserId): Observable<any> {
    return this.http
    .get(`api/portals/active/${currentUserId}`);
  }
  //
  chekPortalStatus(token): Observable<any> {
    return this.http
    .post("api/portals/portalStatus", {token});
  }
  //
  isPortalisMakeUser(portalid) {
    const userPortals = this.getCurentUserPortals;
    const isExist = userPortals.find(item => item.id === portalid);
    return isExist;
  }
}
