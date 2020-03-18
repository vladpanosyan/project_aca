import { Component, OnInit } from "@angular/core";
import { PortalService } from "../../services/portal/portal.service";
import { NickNameService } from "src/app/services/nickName/nick-name.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { ChatService } from "src/app/services/chat/chat.service";
import { switchMap } from "rxjs/operators";
import { EMPTY, fromEvent } from "rxjs";
@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.css"]
})

// [routerLink]="['/api/portals', item.token]"
export class CoverComponent implements OnInit {
  portalData: any[];
  currentUserPortals: any[];
  constructor(
    private userAuthService: UserAuthService,
    private portalService: PortalService,
    private router: Router,
    private nickNameService: NickNameService,
    private chatService: ChatService
  ) {
    this.portalData = [];
    this.currentUserPortals = [];
    this.portalService.portal.subscribe(portal => {
      this.portalData.push(portal);
    });
  }

  async openModal(item, privatePortal) {
    this.portalService.currentPortalIdSubject.next(item.id);
    this.portalService.currentPortalSubject.next(item);
    const userId =
      this.userAuthService.currentUserValue &&
      this.userAuthService.currentUserValue.id;
    const issubLoggedIn = await this.nickNameService.isSubAuth(item.id);

    if (
      (issubLoggedIn && issubLoggedIn.currentNicId) ||
      userId === item.userId
    ) {
      this.router.navigate(["portals", item.token]);
    } else if (issubLoggedIn === false) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "false token!",
        footer: "<a href>Why do I have this issue?</a>"
      });
    } else {
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        progressSteps: ["1", "2"]
      })
        .queue([
          {
            title: "Step 1",
            text: !privatePortal
              ? "Press Next Button To Continue"
              : "Enter your subscribtion token",
            showLoaderOnConfirm: true,
            inputValue: !privatePortal && item.token,
            // tslint:disable-next-line: no-shadowed-variable
            preConfirm: async token => {
              try {
                const isValidToken = await this.portalService.checkPermision(
                  token,
                  item.id
                );
                if (!isValidToken.ok) {
                  throw new Error(isValidToken.textContent);
                }
                return isValidToken;
              } catch (error) {
                Swal.showValidationMessage(`Access failed: ${error.message}`);
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          },
          {
            title: "Step 2",
            text: "Ente your Nickname identify",
            showLoaderOnConfirm: true,
            preConfirm: async nickNmae => {
              const nickToken = this.nickNameService.getNickToken;
              try {
                if (!nickNmae) {
                  throw new Error("Please enter your nickname");
                }
                const nickname = await this.nickNameService.createNickname(
                  nickNmae,
                  item.id,
                  nickToken
                );
                if (!nickname.id) {
                  throw new Error(nickname.textContent);
                }
                return nickname;
              } catch (error) {
                Swal.showValidationMessage(`Access failed: ${error.message}`);
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          }
        ])
        .then(async result => {
          if (result.value) {
            await Swal.fire({
              title: "All done!",
              html: `Dear ${result.value[1].name} you succesfully Registered`,
              confirmButtonText: "Let's Start!"
            });
            localStorage.setItem("nickToken", result.value[1].token);
            this.router.navigate(["/portals", item.token]);
          }
        });
    }
  }

  ngOnInit() {
    //
    this.chatService.refreshPortals
      .pipe(switchMap(_ => this.portalService.getAll()))
      .subscribe(portals => {
        this.portalData = portals;
      });
    //
    this.portalService.getAll().subscribe(portals => {
      this.portalData = portals;
    });
    //
    this.userAuthService.isAuthenticated().then(result => {
      if (result) {
        this.userAuthService.setLogin();
      } else {
        this.userAuthService.setLogOut();
      }
    });
    //
    this.portalService
      .showForm()
      .pipe(
        switchMap(result => {
          if (result && result.state === null) {
            return this.portalService.chekPortalStatus(result.token);
          } else if (result) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something Went wrong!",
              footer: "<a href>Why do I have this issue?</a>"
            });
            return EMPTY;
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(status => {
        // if (status.private) {
        //   this.openModal(status, false);
        // } else {
        this.openModal(status, false);
        // }
      });
    //
    const userId =
      this.userAuthService.currentUserValue &&
      this.userAuthService.currentUserValue.id;
    if (userId) {
      this.portalService.getUserPortals(userId).subscribe(portals => {
        this.currentUserPortals = portals;
      });
    }
    //
    this.chatService.addToOnline.subscribe(portalId => {
      this.portalData.find(
        item => item.id === portalId && (item.onlineSub += 1)
      );
    });

    this.chatService.removeToOnline.subscribe(portalId => {
      this.portalData.find(
        item => item.id === portalId && (item.onlineSub -= 1)
      );
    });

    //
    this.chatService.refreshActivePortals.subscribe(portalId => {
      this.portalData.find(
        portal => portal.id === portalId && (portal.isStarted = 1)
      );
    });

    this.chatService.endOfPortal.subscribe((data: any) => {
      this.portalData.find(
        (portal, index, portalData) =>
          portal.id === data.portalId && portalData.splice(index, 1)
      );
    });
    //
    // fromEvent(window, "unload").subscribe(e => alert(e));
  }
}
