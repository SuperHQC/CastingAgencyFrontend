import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "movies",
        loadChildren: "../movies-menu/movies-menu.module#MoviesMenuPageModule"
      },
      {
        path: "user-page",
        loadChildren: "../user-page/user-page.module#UserPagePageModule"
      },
      {
        path: "actors",
        loadChildren: "../actors-menu/actors-menu.module#ActorsMenuPageModule"
      },
      {
        path: "",
        redirectTo: "/tabs/drink-menu",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/user-page",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
