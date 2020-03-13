import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AllclientComponent } from './client/allclient/allclient.component';
 import { AddclientComponent } from './client/addclient/addclient.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'client/allclient',
      component: AllclientComponent,
    },
    {
      path: 'client/addclient',
      component: AddclientComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
