import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AnswerService {
  constructor(private http: HttpClient) {
  }

  getAnswers(portalId): Observable<any> {
    return this.http.get(`api/answers/${portalId}`);
  }
}
