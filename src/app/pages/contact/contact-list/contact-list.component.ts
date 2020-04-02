import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../contact.model';
import { ContactService } from '../../service/contact.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';



@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  loadingIndicator: boolean = false;
  contactList:any[] = [];
  columns: any[] = [];
  index: number;
  order: string;
  direction: string;
  contact:ContactModel;
  Contact: ContactModel | any;
  roleTemplate: any;

  constructor(public http: HttpClient,
    private service: ContactService , private router: Router,
    private toastrService: NbToastrService,private dialogService: NbDialogService,
    private route: ActivatedRoute) { 
      this.contact= new ContactModel()
      const data = this.service.getContact().subscribe(res=>{
        this.contactList = res;
        console.log(this.contactList);
        console.log(res);
      });
    
  }
  showToast(position, status,message) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
  ngOnInit() {
    this.columns=[
       { prop:'last_name', name: 'LIST NAME' },
      //  { prop:'last_name', name: 'LIST NAME'}
    ];
    this.loadData();
    
  }

  loadData() {
    this.contactList;
    
   }

  changePage(pageInfo) {
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
  }
  addContactGroup(){
    debugger
    this.http.post('http://localhost:3000/Contact/add', this.contact)
        .subscribe(response => {
          this.showToast('top-right', 'success','added successfully');
          console.log(response);
        }, (err) => {
          this.showToast('top-right', 'danger', err.message);
         console.log ('Oooops!',err);
        });
  }
  onview(row){
    console.log("row",row);
    this.router.navigate(['pages/contact/add-contact/'+ row._id]); 
  }
  onAdd(){
    this.router.navigate(['pages/contact/add-contact/']);
  }
  onEdit(row){
    console.log("row",row);
    // this.dialogService.open([`pages/contact/edit-contact:id/${row._id}`]);
    this.router.navigate(['pages/contact/contact-list:id/'+row._id]);
  }
  onDelete(row){
    console.log('hii');
  }
}
