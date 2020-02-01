import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class QuestionService {

  // for new create message

  msg = new Subject();
  getMsg: Observable<any>;

  recivierSubject = new Subject();
  recivierAns: Observable<any>;

  constructor(private http: HttpClient) {
    this.getMsg = this.msg.asObservable();
    this.recivierAns = this.recivierSubject.asObservable();
  }

  getAllQuestions(portalToken): Observable<any> {
    return this.http
    .get(`api/questions/getAll/${portalToken}`);
  }

  getTop_10_questions(portalId): Observable<any> {
    return this.http
    .get(`api/questions/getTOP10/${portalId}`);
  }
}
