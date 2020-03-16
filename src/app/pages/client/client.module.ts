import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllclientComponent } from './allclient/allclient.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule,NbSelectModule, NbCardModule } from '@nebular/theme';
import { AddclientComponent } from './addclient/addclient.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [AllclientComponent,AddclientComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class ClientModule { }
