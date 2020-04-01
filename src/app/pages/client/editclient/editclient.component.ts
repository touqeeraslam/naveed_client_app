import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ClientModel } from '../addclient/client.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { ProfileComponent } from '../profile/profile.component';
import { UpdatelimitComponent } from '../updatelimit/updatelimit.component';
import { SendsmsComponent } from '../sendsms/sendsms.component';

@Component({
  selector: 'editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {
  imageSrc = '';
  // names: string[] = [];
  @HostBinding('class')
  classes = 'example-items-rows';
  @Input() inputData:any;
  data:any;
  message:string;
  client: ClientModel | any;
  index: number;
  userPictureOnly: boolean = false;
  user: any;
  loadingIndicator: boolean = false;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number=10;
  search: string;
  order: string;
  direction: string;
  roleTemplate: any;
  url:string="http:localhost:3000"
  userNick: any;
  image:any
  constructor(public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,private dialogService: NbDialogService,
    private route: ActivatedRoute) {
      this.client=new ClientModel()
    }

   showToast(position, status,message) {
      this.index += 1;
      this.toastrService.show(
        status || 'Success',
        message,
        { position, status });
    }

  ngOnInit() {
    debugger
    this.http.get("http://localhost:3000/Client/getByUserId/"+this.route.snapshot.params.id).subscribe((res:any)=>{
      // res[0].image= this.url+res[0].image;
      this.client=res[0];
        console.log("get by id",res)
      })
      debugger
      
          if(this.client){
          }else{
            this.client=new ClientModel()
          }
    this.columns = [
      { prop: 'username', name: 'Name' },
       { prop: 'company', name: 'User Name' },
      { prop: 'username', name: 'Created' },
      { prop: 'username', name: 'Created By' },
      { prop: 'city', name: 'Api Access' },
      { prop: 'state', name: 'Status' },
    ];
    this.loadData();
  }

  loadData() {
    this.dataList;
   }

  changePage(pageInfo) {
    // this.loadData(pageInfo.offset + 1);
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
    // this.loadData();
  }

  onupdate(){
    debugger
    this.http.put("http://localhost:3000/Client/update/"+this.route.snapshot.params.id, this.client).subscribe((res:any)=>{
      debugger
      console.log(res);
      this.router.navigate(["pages/client/allclient/"]);
      this.showToast('top-right', 'success','Updated successfully');
    }, (err) => {
      this.showToast('top-right', 'danger', err.message);
     console.log ('Oooops!',err);
      
      })
   }
  changeProfile=()=>{
    this.dialogService.open(ProfileComponent)

    .onClose.subscribe(fileurl =>{
      console.log('model close',fileurl)
      this.client.image = fileurl});
  }
 
  updatelimit(){
    this.dialogService.open(UpdatelimitComponent);
  }
  sendsms(){
    this.dialogService.open(SendsmsComponent);
  }
}
