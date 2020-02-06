import { Component, OnInit, OnDestroy, Input, AfterViewChecked, ViewChild, ElementRef } from "@angular/core";
import { QuestionService } from "src/app/services/question/question.service";
import { ActivatedRoute } from "@angular/router";
import { extractLikes } from "src/app/HELPERS/extractLikes";
import { ChatService } from "src/app/services/chat/chat.service";
import { PortalService } from 'src/app/services/portal/portal.service';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

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
    if (item.isLiked) {
      item.isLiked = false;
      item.isClicked = true;
      console.log("click-Minus");
      const t = extractLikes(item);
      // console.log(t, 777);
      item.likes = t - 1;
      console.log(item.likes, 8888);
      this.chatServise.sendLikeCount(
        { index: i, likes: t - 1, nicknameId: us_erID, questionId: item.id },
        "minus"
      );
    } else {
      item.isLiked = true;
      item.isClicked = false;
      const t = extractLikes(item);
      item.likes = t + 1;
      console.log(item.likes, 9999);
      console.log("click-Plus");
      this.chatServise.sendLikeCount(
        { index: i, likes: t + 1, nicknameId: us_erID, questionId: item.id },
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
    //   // console.log(questionItem.isLiked, 5566);
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

    this.chatServise.socketConnect(this.nickData);

    this.questionService
      .getAllQuestions(this.portalToken)
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        console.log(questions, 210989);
        this.questions = questions;
        // this.questions.concat(this.question);
      });
    this.chatServise.addLikeCount();
    this.chatServise.likeCountSubscrbtion
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      console.log(data, 555222111); 
      this.questions[data.index].likes = data.likes;
    });
    this.questionService.getMsg
    .pipe(takeUntil(this.destroy$))
    .subscribe(message => {
      this.questions.push(message);
    });
    //
    this.questionService.changeAvatar
    .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      // console.log(result, 33322211);
      // console.log(this.questions);
      this.questions.forEach((item, index) => {
        if (item.nickss.id === result.nickId) {
          item.nickss.image = result.avatar;
        }
      });
    });
    //
    this.chatServise.endOfPortal
    .pipe(takeUntil(this.destroy$))
    .subscribe((isFinished: boolean) => {
      // alert(isFinished)
      this.portalService.portalFinishedSubject.next(!!isFinished);
    });
  }

  ngOnDestroy() {
    this.chatServise.socketDisconnect(this.nickData);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

// partadir destroy ara bolor subscribtion unsub anelu hamar
