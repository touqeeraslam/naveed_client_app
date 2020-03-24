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
  userNick: any;
  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='
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
    this.client = this.route.snapshot.queryParams;
    debugger
      // if () {
        if(this.client){
          // this.client=this.inputData
        }else{
          this.client=new ClientModel()
        }
      // }
    // })


  }

  onupdate(){
    this.router.navigate(["pages/client/allclient/"]);
  }
  changeProfile(){
    this.dialogService.open(ProfileComponent);
  }
  updatelimit(){
    this.dialogService.open(UpdatelimitComponent);
  }
  sendsms(){
    this.dialogService.open(SendsmsComponent);
  }
}
