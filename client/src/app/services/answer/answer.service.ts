import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AnswerService {
  //  answerSubject: Subject<string>;
  //  answer: Observable<any>;
  constructor(private http: HttpClient) {
    // this.answerSubject = new Subject();
    // this.answer = this.answerSubject.asObservable();
  }

  getAnswers(portalId): Observable<any> {
    return this.http.get(`api/answers/${portalId}`);
  }
}
