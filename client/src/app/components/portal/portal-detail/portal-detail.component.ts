import { Component, OnInit, OnDestroy } from "@angular/core";
import { NickNameService } from "src/app/services/nickName/nick-name.service";
import { ChatService } from "src/app/services/chat/chat.service";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { PortalService } from "src/app/services/portal/portal.service";
import { QuestionService } from "src/app/services/question/question.service";

import { Subject, Observable } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-portal-detail",
  templateUrl: "./portal-detail.component.html",
  styleUrls: ["./portal-detail.component.css"]
})
export class PortalDetailComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  portalData: any;
  nickData: any;
  userData: any;
  messages: any[] = [];
  answer: Subject<any> = new Subject<any>();
  inUserPortal = false;
  token = "";

  kkk = 1;

  constructor(
    private nickService: NickNameService,
    private userAuthService: UserAuthService,
    private chatService: ChatService,
    private portalService: PortalService,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.nickService.currentNickToken.subscribe(token => (this.token = token));
  }

  ChangedAvatar(avatar: string) {
    this.nickData.image = avatar;
    this.questionService.changeAvatarSubject.next({
      avatar,
      nickId: this.nickData.id
    });
  }

  ngOnInit() {
    this.portalData = this.portalService.getCurrentPortal;
    alert(JSON.stringify(this.portalData))
    this.nickService.nickData.subscribe(data => (this.nickData = data));

    this.userData = this.userAuthService.currentUserValue;
    // alert(JSON.stringify(this.userData, null, 2))

    if (
      this.userAuthService.UserLoggedStatus &&
      this.portalService.isPortalisMakeUser(this.portalService.getPortalId)
    ) {
      this.inUserPortal = true;
    } else {
      this.inUserPortal = false;
    }
    //
    this.chatService.answerQuestion
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(answer => {
        this.answer.next(answer);
      });
    this.chatService.message
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(message => {
        this.questionService.msg.next(message);
      });
    //

    this.portalService.portalFinished
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        if (this.inUserPortal) {
          this.router.navigate(["/api/users/home"]);
        } else {
          this.router.navigate(["/"]);
        }
      });

    // check subscriber authorization
    // this.nickService.isSubscriberAuth()
    // .subscribe(x => this.nickData = x);
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
