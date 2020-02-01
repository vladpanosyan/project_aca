import { Component, OnInit, Input } from "@angular/core";
import { AnswerService } from "src/app/services/answer/answer.service";
import { PortalService } from "src/app/services/portal/portal.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.css"]
})
export class ChatListComponent implements OnInit  {
  answers: any[];
  constructor(
    private answerService: AnswerService,
    private portalService: PortalService
  ) {}

  @Input() answer: any;
  @Input() inUserPortal: boolean;
  @Input() userData: any;
  @Input() nickData: any;
  // @Input() portalData: any;

  ngOnInit() {
    const portalId = this.portalService.getPortalId;
    this.answerService.getAnswers(portalId)
    .subscribe(answers => this.answers = answers);

    this.answer.subscribe(answer => this.answers.push(answer));
  }
}
