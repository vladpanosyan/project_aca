import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from "@angular/core";
import { QuestionService } from "src/app/services/question/question.service";
import { ActivatedRoute } from "@angular/router";
import { extractLikes } from "src/app/HELPERS/extractLikes";
import { ChatService } from "src/app/services/chat/chat.service";
import { PortalService } from "src/app/services/portal/portal.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit, OnDestroy, AfterViewChecked {
  portalToken: string;
  questions: any[] = [];
  isLiked = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // canAutoScroll = true;
  constructor(
    private questionService: QuestionService,
    private chatServise: ChatService,
    private portalService: PortalService,
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {
    const portalToken = this.route.snapshot.paramMap.get("token");
    this.portalToken = portalToken;
  }

  @Input() question: any[];
  @Input() nickData: any;
  @Input() userData: any;
  @Input() inUserPortal: boolean;
  @Input() portalId: number;
  @Input() portalData: any;

  // keep scroll in bottom
  @ViewChild("scrollMe", { static: false })
  private myScrollContainer: ElementRef;
  get currUserID() {
    return this.inUserPortal ? this.userData.id : this.nickData.id;
  }
  get currPortalId() {
    return this.inUserPortal ? this.userData.id : this.nickData.id;
  }

  ngAfterViewChecked() {
    const canAutoScroll = this.questionService.scrollStatus;
    if (canAutoScroll) {
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      alert(err.message);
    }
  }

  action(item, i) {
    this.questionService.canScrollSubject.next(false);
    const us_erID = this.currUserID;
    const portalId = this.portalId;
    if (item.isLiked) {
      item.isLiked = false;
      item.isClicked = true;
      const t = extractLikes(item);
      item.likes = t - 1;
      this.chatServise.sendLikeCount(
        { index: i, likes: t - 1, nicknameId: us_erID, questionId: item.id, portalId },
        "minus"
      );
    } else {
      item.isLiked = true;
      item.isClicked = false;
      const t = extractLikes(item);
      item.likes = t + 1;
      this.chatServise.sendLikeCount(
        { index: i, likes: t + 1, nicknameId: us_erID, questionId: item.id, portalId },
        "plus"
      );
    }
  }

  // if user or subscriber are liked a question
  isNickLiked(questionItem) {
    const us_erID = this.currUserID;
    const value = questionItem.questionLikers
      ? questionItem.questionLikers.some(item => {
          return item === us_erID;
        })
      : false;
    //
    if (value && !questionItem.isClicked) {
      questionItem.isLiked = true;
      return value;
    } else if (value && questionItem.isClicked) {
      questionItem.isLiked = false;
      return false;
    } else {
      questionItem.isLiked = false;
      return false;
    }
  }

  finishPortal() {
    this.chatServise.finishPortal(this.portalId);
  }

  ngOnInit() {
    if (!this.portalService.isPortalisMakeUser(this.portalId, null)) {
      this.chatServise.socketConnect(this.nickData);
    }
    //
    this.questionService
      .getAllQuestions(this.portalToken)
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.questions = questions;
      });
    this.chatServise.addLikeCount();
    //
    this.chatServise.likeCountSubscrbtion
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.questions[data.index].likes = data.likes;
      });
    //
    this.questionService.getMsg
      .pipe(takeUntil(this.destroy$))
      .subscribe(message => {
        this.nickData.questionsInPortal = message.nickss.questionsInPortal;
        if (!this.portalData.portalManyQuestion.length) {
          this.portalData.portalManyQuestion.push({ questionsInPortal: 1 });
        } else {
          this.portalData.portalManyQuestion[0].questionsInPortal =
            message.nickss.questionsInPortal;
        }
        this.questions.push(message);
      });
    //
    this.questionService.changeAvatar
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.questions.forEach((item, index) => {
          if (item.nickss.id === result.nickId) {
            item.nickss.image = result.avatar;
          }
        });
      });
    //
    this.chatService.updateAvatarS.subscribe(data => {
      console.log(this.questions, 120);
      this.questions.find(
        item => item.nickss.id === data.id && (item.nickss.image = data.avatar)
      );
    });
    //
    this.chatServise.endOfPortal
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.portalService.portalFinishedSubject.next(!!data.isFinished);
      });
  }

  ngOnDestroy() {
    // if (!this.portalService.isPortalisMakeUser(this.portalId, null)) {
    this.chatServise.socketDisconnect(this.nickData);
    // }
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
