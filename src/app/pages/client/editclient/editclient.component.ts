import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ClientModel } from '../addclient/client.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {
  @HostBinding('class')
  classes = 'example-items-rows';
  @Input() inputData:any;
  data:any;
  message:string;
  client: ClientModel;
  index: number;
  constructor(public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,
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
    if(this.inputData){
      this.client=this.inputData
    }else{
      this.client=new ClientModel()
    }
 
  }

}
