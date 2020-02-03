import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";


interface IchAvatar {
  nickId: number;
  avatar: string;
}

@Injectable({
  providedIn: "root"
})


export class QuestionService {

  // for new create message

  msg = new Subject();
  getMsg: Observable<any>;

  changeAvatarSubject = new Subject<IchAvatar>();
  changeAvatar: Observable<IchAvatar>;

  recivierSubject = new Subject();
  recivierAns: Observable<any>;

  canScrollSubject = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    this.getMsg = this.msg.asObservable();
    this.recivierAns = this.recivierSubject.asObservable();
    this.changeAvatar = this.changeAvatarSubject.asObservable();
  }

  get scrollStatus() {
    return this.canScrollSubject.value;
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

