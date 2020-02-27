import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ModalController } from "@ionic/angular";
import { ActorsService, Actor } from "../../services/actors.service";
import { ActorsFormComponent } from "./actors-form/actors-form.component";

@Component({
  selector: "app-actors-menu",
  templateUrl: "./actors-menu.page.html",
  styleUrls: ["./actors-menu.page.scss"]
})
export class ActorsMenuPage implements OnInit {
  Object = Object;
  constructor(
    private auth: AuthService,
    private modalCtrl: ModalController,
    public actors: ActorsService
  ) {}

  ngOnInit() {
    this.actors.getActors();
  }

  async openForm(activeActor: Actor = null) {
    if (!this.auth.can("get:actors")) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: ActorsFormComponent,
      componentProps: { actor: activeActor, isNew: !activeActor }
    });

    modal.present();
  }
}
