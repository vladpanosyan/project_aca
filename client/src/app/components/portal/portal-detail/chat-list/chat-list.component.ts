import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef } from "@angular/core";
import { AnswerService } from "src/app/services/answer/answer.service";
import { PortalService } from "src/app/services/portal/portal.service";
import { ChatService } from 'src/app/services/chat/chat.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.css"]
})
export class ChatListComponent implements OnInit, AfterViewChecked  {
  answers: any[];
  constructor(
    private answerService: AnswerService,
    private portalService: PortalService,
    private questionService: QuestionService,
    private chatService: ChatService
  ) {}

  @Input() answer: any;
  @Input() inUserPortal: boolean;
  @Input() userData: any;
  @Input() nickData: any;
  @Input() portalData: any;

  @ViewChild("scrollMe", { static: false })
  private myScrollContainer: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      alert(err.message);
    }
  }

  ngOnInit() {
    const portalId = this.portalService.getPortalId;
    this.answerService.getAnswers(portalId)
    .subscribe(answers => {
      this.answers = answers;
    });

    this.answer.subscribe(answer => this.answers.push(answer));
    //
    this.chatService.updateAvatarS.subscribe(
      data => {
        this.answers.find(item => item.answerToQuestion.nickss.id === data.id && ( item.answerToQuestion.nickss.image = data.avatar));
      }
    );
    //
    this.questionService.changeAvatar
    // .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      this.answers.find((item, index) => {
        if (item.answerToQuestion.nickss.id === result.nickId) {
          item.answerToQuestion.nickss.image = result.avatar;
          return true;
        }
        return;
      });
    });
  }
}
