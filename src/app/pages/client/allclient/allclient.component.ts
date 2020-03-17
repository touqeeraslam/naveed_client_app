import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../../../view-models/user';
import { ClientViewmodel } from '../../Viewmodel/client-viewmodel';
import { ClientService } from '../../service/client.service';
import { NbDialogService } from '@nebular/theme';
import { AddclientComponent } from '../addclient/addclient.component';

@Component({
  selector: 'allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.scss']
})
export class AllclientComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
    
      fname: {
        title: 'Name',
        type: 'string',
      },
      lname: {
        title: 'User Name',
        type: 'string',
      },
      company: {
        title: 'Created',
        type: 'string',
      },
      website: {
        title: 'reated by',
        type: 'string',
      },
      email: {
        title: 'Status',
        type: 'string',
      },
    },
  };
  private source;
  constructor(private service: ClientService,private dialogService: NbDialogService) { 
    const data = this.service.getData().subscribe(res=>{
      this.source = res as ClientViewmodel
    });
  }
  names: string[] = ['hello'];
  private firstname:string;
  private lastname:string;
  message:string;
  selectedItem = '2';
  ngOnInit() {
  }
  allclient()
{
this.firstname = null;
this.lastname = null;
this.message="form submit";
}
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context:{firstname:'fname',lastname:'lname', } });
  }

onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}
}
