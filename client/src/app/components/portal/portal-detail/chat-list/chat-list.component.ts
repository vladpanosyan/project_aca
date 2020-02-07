import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef } from "@angular/core";
import { AnswerService } from "src/app/services/answer/answer.service";
import { PortalService } from "src/app/services/portal/portal.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.css"]
})
export class ChatListComponent implements OnInit, AfterViewChecked  {
  answers: any[];
  constructor(
    private answerService: AnswerService,
    private portalService: PortalService
  ) {}

  @Input() answer: any;
  @Input() inUserPortal: boolean;
  @Input() userData: any;
  @Input() nickData: any;
  @Input() portalData: any;
  // @Input() portalData: any;

  // keep scroll in bottom
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
      console.log(answers, 1414114);
      this.answers = answers;
    });

    this.answer.subscribe(answer => this.answers.push(answer));
  }
}
