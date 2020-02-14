import {
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { PortalService } from "src/app/services/portal/portal.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-send-mail-modal",
  templateUrl: "./send-mail-modal.component.html",
  styleUrls: ["./send-mail-modal.component.css"]
})
export class SendMailModalComponent implements OnInit {
  sendMailForm: FormGroup;
  fails = false;
  failureMsg = "sign correct email";
  err: string;
  asd: string;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public portalService: PortalService,
    public userService: UserService
  ) {
    this.sendMailForm = this.formBuilder.group({
      emails: this.formBuilder.array([
        this.formBuilder.group({
          email: [null, [Validators.email]]
        })
      ])
    });
  }

  @Input()
  url: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.fails = false;
          this.userService
            .sendMail(result.value, this.url)
            .subscribe(info => console.log(info, 789));
        },
        reason => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  checkFormValid(isValid) {
    if (isValid.valid) {
      return true;
    }
    this.fails = true;
    return false;
  }

  get inpArray(): FormArray {
    return this.sendMailForm.get("emails") as FormArray;
  }

  addInput() {
    this.inpArray.push(
      this.formBuilder.group({ email: [null, [Validators.email]] })
    );
  }

  removeEmail(i: number) {
    this.inpArray.removeAt(i);
  }

  ngOnInit() {}
}
