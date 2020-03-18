import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllclientComponent } from './allclient/allclient.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule,NbSelectModule, NbCardModule, NbToastrModule, NbAlertModule, NbDialogModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { AddclientComponent } from './addclient/addclient.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { config } from 'process';
import { EditclientComponent } from './editclient/editclient.component';



@NgModule({
  declarations: [AllclientComponent,AddclientComponent, EditclientComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbToastrModule,
    NbAlertModule,
    NbUserModule,
    NbTabsetModule,
    NbDialogModule.forChild()
  ]
})
export class ClientModule { }
