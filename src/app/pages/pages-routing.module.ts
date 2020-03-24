import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { AllclientComponent } from "./client/allclient/allclient.component";
import { AddclientComponent } from "./client/addclient/addclient.component";
import { EditclientComponent } from "./client/editclient/editclient.component";
import { ProfileComponent } from "./client/profile/profile.component";
import { UpdatelimitComponent } from "./client/updatelimit/updatelimit.component";
import { SendsmsComponent } from "./client/sendsms/sendsms.component";
const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "client/allclient",
        component: AllclientComponent
      },
      {
        path: "client/addclient",
        component: AddclientComponent
      },
      {
        path: "editclient",
        component: EditclientComponent
      },
      {
        path: "client/editclient/:id",
        component: EditclientComponent
      },
      {
        path: "client/profile",
        component: ProfileComponent
      },
      {
        path: "client/limit",
        component: UpdatelimitComponent
      },
      {
        path: "client/sms",
        component: SendsmsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
