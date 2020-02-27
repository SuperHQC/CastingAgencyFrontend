import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ActorsMenuPage } from "./actors-menu.page";
import { ActorsFormComponent } from "./actors-form/actors-form.component";

const routes: Routes = [
  {
    path: "",
    component: ActorsMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ActorsFormComponent],
  declarations: [ActorsMenuPage, ActorsFormComponent]
})
export class ActorsMenuPageModule {}
