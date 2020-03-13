import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllclientComponent } from './allclient/allclient.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule,NbSelectModule } from '@nebular/theme';
import { AddclientComponent } from './addclient/addclient.component';

@NgModule({
  declarations: [AllclientComponent,AddclientComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class ClientModule { }
