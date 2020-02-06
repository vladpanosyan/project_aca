import { Injectable } from "@angular/core";
import { Socket, } from "ngx-socket-io";
import { Subject, Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ChatService {
  likeCountSubject: Subject<any>;
  likeCountSubscrbtion: Observable<any>;

  message        = this.socket.fromEvent("message");
  answerQuestion = this.socket.fromEvent("answ_message");
  refreshPortals = this.socket.fromEvent("showPortals");
  TOP10          = this.socket.fromEvent("show_top_10");
  endOfPortal    = this.socket.fromEvent("portal_end");
  addToOnline    = this.socket.fromEvent("add_to_online");
  removeToOnline = this.socket.fromEvent("remove_to_online");

  constructor(
    private socket: Socket
    ) {
    this.likeCountSubject = new Subject();
    this.likeCountSubscrbtion = this.likeCountSubject.asObservable();
  }

  socketConnect(nickData) {
    // this.socket.on("connect", () => {
      // alert(50);
      // console.log()
      this.socket.emit("connected", nickData);
    // });
  }

  socketDisconnect(nickData) {
    this.socket.emit("disconected", nickData);
  }

  addLikeCount() {
    this.socket.on("sendLikesCount", (data) => {
      this.likeCountSubject.next(data);
    });
  }

  sendLikeCount(data, action) {
    // alert(JSON.stringify(data));
    this.socket.emit("get_likes_count", data, action);
  }

  sendMessage(nickData) {
    delete nickData.nickToPortal;
    this.socket.emit("send_message", nickData);
  }

  answQuestion(answerData) {
    this.socket.emit("send_question", answerData);
  }

  finishPortal(portalId) {
    this.socket.emit("fin_portal", portalId);
  }
}
