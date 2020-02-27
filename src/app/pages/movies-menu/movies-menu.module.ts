import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MoviesMenuPage } from "./movies-menu.page";
import { MoviesFormComponent } from "./movies-form/movies-form.component";

const routes: Routes = [
  {
    path: "",
    component: MoviesMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MoviesFormComponent],
  declarations: [MoviesMenuPage, MoviesFormComponent]
})
export class MoviesMenuPageModule {}
