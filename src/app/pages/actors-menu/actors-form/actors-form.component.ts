import { Component, OnInit, Input } from "@angular/core";
import { Actor, ActorsService } from "src/app/services/actors.service";
import { ModalController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-actors-form",
  templateUrl: "./actors-form.component.html",
  styleUrls: ["./actors-form.component.scss"]
})
export class ActorsFormComponent implements OnInit {
  @Input() actor: Actor;
  @Input() isNew: boolean;

  constructor(
    public auth: AuthService,
    public modalCtrl: ModalController,
    public actorsService: ActorsService
  ) {}

  ngOnInit() {
    if (this.isNew) {
      this.actor = {
        id: -1,
        name: "",
        age: -1,
        gender: ""
      };
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveClicked() {
    console.log(this.actor);
    this.actorsService.saveActor(this.actor);
    this.closeModal();
  }

  deleteClicked() {
    this.actorsService.deleteActor(this.actor);
    this.closeModal();
  }
}
