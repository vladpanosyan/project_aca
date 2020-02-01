import { Component, OnInit, Input} from "@angular/core";
import { NickNameService } from "src/app/services/nickName/nick-name.service";

@Component({
  selector: "ngbd-dropdown-basic",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {

  @Input() portalId: number;
  @Input() nickId: number;

avatars = [
  "https://ya-webdesign.com/transparent250_/ale-riendo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwH6DalS_KpcvdezZT-tymCO2Spog0pW1g8ySWMhAPAohnxKNJ",
  "https://i.ya-webdesign.com/images/male-avatar-icon-png-18.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR7BUU0nd3piJ38VsRBI6ZuUGpYFca4z35W0bcGaCd84XNV8Kj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmlIXnWr7kjdc-yDwD5FT_TwHgFOmOqcBvVylgafeSlAXtVjiZ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHhMPsakSz2Jpg2v9AN5dmzTq6A4xZfGEl2B1XnzOzs13CbpZS",
  "https://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Devil-3-icon.png"
];

  constructor(
    private nickNameService: NickNameService
  ) {}

  updateAvatar(avatar) {
    this.nickNameService.changeAvatar({avatar, portalId: this.portalId, nickId: this.nickId})
    .subscribe(response => console.log(response, 7444));
  }

  ngOnInit() {}
}
