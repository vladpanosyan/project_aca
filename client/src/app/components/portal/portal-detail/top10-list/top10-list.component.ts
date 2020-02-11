import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { QuestionService } from "src/app/services/question/question.service";
import { Subject, timer } from "rxjs";
import { concatMap, takeUntil} from "rxjs/operators";
import { PortalService } from "src/app/services/portal/portal.service";

@Component({
  selector: "app-top10-list",
  templateUrl: "./top10-list.component.html",
  styleUrls: ["./top10-list.component.css"]
})
export class Top10ListComponent implements OnInit, OnDestroy {
  top10data: any[];
  portalId: number;
  private unsubscribe$ = new Subject();

  @Input() inUserPortal: boolean;

  constructor(
    private questionService: QuestionService,
    private portalService: PortalService,
  ) {}

  prepForAnswer(nick) {
    this.questionService.recivierSubject.next(nick);
  }

  ngOnInit() {
    this.portalId = +this.portalService.getPortalId;
    const data$ = this.questionService.getTop_10_questions(this.portalId);
    timer(0, 80000).pipe(
      concatMap(_ => data$),
      takeUntil(this.unsubscribe$)
    )
    .subscribe(response => {
      this.top10data = response;
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
