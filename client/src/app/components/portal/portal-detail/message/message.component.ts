import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "src/app/services/chat/chat.service";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { PortalService } from "src/app/services/portal/portal.service";
import { QuestionService } from "src/app/services/question/question.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  @Input() userData: any;
  @Input() nickData: any;

  isUserInSelfPortal: boolean;
  currTop10Nick: any;
  constructor(
    private chatService: ChatService,
    private userAuthService: UserAuthService,
    private portalService: PortalService,
    private questionService: QuestionService
  ) {}

  message = "";

  //  for subscriber
  sendMessage(message) {
    this.questionService.canScrollSubject.next(true);
    if (message.trim()) {
      const nickDataClone = { ...this.nickData };
      nickDataClone.message = message;
      nickDataClone.time = new Date();
      this.chatService.sendMessage(nickDataClone);
      this.message = "";
    }
  }
  // for user
  sendMessgeQuestion(answer) {
    this.questionService.canScrollSubject.next(true);
    if (answer.trim()) {
      const userId     = this.userData.id;
      const portalId   = this.currTop10Nick.nickss.portalId;
      const questionId = this.currTop10Nick.id;
      this.chatService.answQuestion({userId, questionId, answer, portalId} );
      this.message = "";
    }
  }

  ngOnInit() {
    this.isUserInSelfPortal =
      this.userAuthService.UserLoggedStatus &&
      this.portalService.isPortalisMakeUser(this.portalService.getPortalId, null);

    this.questionService.recivierAns
    .subscribe(nick => {
      this.currTop10Nick = nick;
    });

  }
}
