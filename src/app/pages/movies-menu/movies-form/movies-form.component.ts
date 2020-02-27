import { Component, OnInit, Input } from "@angular/core";
import { Movie, MoviesService } from "src/app/services/movies.service";
import { ModalController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-movies-form",
  templateUrl: "./movies-form.component.html",
  styleUrls: ["./movies-form.component.scss"]
})
export class MoviesFormComponent implements OnInit {
  @Input() movie: Movie;
  @Input() isNew: boolean;

  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    if (this.isNew) {
      this.movie = {
        id: -1,
        title: "",
        release: ""
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
    console.log(this.movie);
    this.moviesService.saveMovie(this.movie);
    this.closeModal();
  }

  deleteClicked() {
    this.moviesService.deleteMovie(this.movie);
    this.closeModal();
  }
}
