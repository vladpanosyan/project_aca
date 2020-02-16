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
  updateAvatarS: any  = this.socket.fromEvent("upadateAvatar");
  refreshPortals = this.socket.fromEvent("showPortals");
  TOP10          = this.socket.fromEvent("show_top_10");
  endOfPortal    = this.socket.fromEvent("portal_end");
  addToOnline    = this.socket.fromEvent("add_to_online");
  removeToOnline = this.socket.fromEvent("remove_to_online");
  refreshActivePortals = this.socket.fromEvent("startedCurrentPortal");

  constructor(
    private socket: Socket
    ) {
    this.likeCountSubject = new Subject();
    this.likeCountSubscrbtion = this.likeCountSubject.asObservable();
  }

  socketConnect(nickData) {
      this.socket.emit("connected", nickData);
  }

  socketDisconnect(nickData) {
    this.socket.emit("disconected", nickData);
  }

  joinRoom(portalId) {
    this.socket.emit("joinRoom", portalId);
  }

  addLikeCount() {
    this.socket.on("sendLikesCount", (data) => {
      this.likeCountSubject.next(data);
    });
  }

  sendLikeCount(data, action) {
    this.socket.emit("get_likes_count", data, action);
  }

  sendMessage(nickData) {
    delete nickData.nickToPortal;
    nickData.questionsInPortal += 1;
    this.socket.emit("send_message", nickData);
  }

  answQuestion(answerData) {
    this.socket.emit("send_question", answerData);
  }

  finishPortal(portalId) {
    this.socket.emit("fin_portal", portalId);
  }

  updateAvatar(data) {
    this.socket.emit("apdateAvatars", data);
  }

  refreshPortalsActivity(portalId) {
    this.socket.emit("refreshStartedPortal", portalId);
  }
}
