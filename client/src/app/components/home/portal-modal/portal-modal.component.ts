import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserAuthService } from "src/app/services/auth/user-auth.service";
import { UTCtimeCreator, isValidDate } from "src/app/HELPERS/portalTimeCreator";
import { PortalService } from "src/app/services/portal/portal.service";

@Component({
  selector: "app-portal-modal",
  templateUrl: "./portal-modal.component.html",
  styleUrls: ["./portal-modal.component.css"]
})
export class PortalModalComponent implements OnInit {
  closeResult: string;
  date;
  time;
  currentUser;
  portalForm: FormGroup;
  isValidEventData = true;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public authService: UserAuthService,
    public portalService: PortalService,
  ) {
    this.portalForm = this.formBuilder.group({
      title: [null, Validators.required],
      date: [new Date(), Validators.required],
      time: [null, Validators.required],
      private: null
    });
    this.authService.currentUser.subscribe((x: any) => {
      this.currentUser = x;
    });

  }

  get fx() {
    return this.portalForm.controls;
  }

  chekEventDataValid(result): boolean {
    if (result.invalid || !isValidDate(result.value.date, result.value.time)) {
      this.isValidEventData = false;
      return ;
    }
    this.isValidEventData = true;
    return true;
    
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          const portalData = result.value;
          const userId = this.currentUser.id;
          const UTCtime = UTCtimeCreator(portalData.date, portalData.time);
          this.portalService.addPortal({start: UTCtime, userId, name: portalData.title, private: +portalData.private})
          .subscribe(portal => {
            this.portalService.portalSubject.next(portal);
            this.portalService.currentPortalIdSubject.next(portal.id);
          });
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {}
}
