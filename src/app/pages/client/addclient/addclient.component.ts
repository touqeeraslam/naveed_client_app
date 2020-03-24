import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModel } from "./client.model";
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  // @HostBinding('class')
  // classes = 'example-items-rows';
  // @Input() inputData:any;
  // data:any;
  // message:string;
  client: ClientModel;
  index: number;
  // selectedItemNgModel;
  // selectedItem = '2';

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
    // if(this.inputData){
    //   this.client=this.inputData
    // }else{
    //   this.client=new ClientModel()
    // }
 
  }
  allclient()
{
  this.http.post('https://ultimatesms1.herokuapp.com/Client/create', this.client)
      .subscribe(response => {
        this.showToast('top-right', 'success','added successfully');
        console.log(response);
      }, (err) => {
        this.showToast('top-right', 'danger', err.message);
       console.log ('Oooops!',err);
      });
  }

}