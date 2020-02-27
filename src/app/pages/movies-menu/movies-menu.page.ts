import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ModalController } from "@ionic/angular";
import { MoviesService, Movie } from "../../services/movies.service";
import { MoviesFormComponent } from "./movies-form/movies-form.component";

@Component({
  selector: "app-movies-menu",
  templateUrl: "./movies-menu.page.html",
  styleUrls: ["./movies-menu.page.scss"]
})
export class MoviesMenuPage implements OnInit {
  Object = Object;
  constructor(
    public auth: AuthService,
    public modalCtrl: ModalController,
    public movies: MoviesService
  ) {}

  ngOnInit() {
    this.movies.getMovies();
  }

  async openForm(activeMovie: Movie = null) {
    if (!this.auth.can("get:movies")) {
      return;
    }

    const modal = await this.modalCtrl.create({
      component: MoviesFormComponent,
      componentProps: { movie: activeMovie, isNew: !activeMovie }
    });

    modal.present();
  }
}
