import { Component, OnInit, HostBinding } from '@angular/core';
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
  @HostBinding('class')
  classes = 'example-items-rows';

  data:any;
  message:string;
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
 
  }
  allclient()
{
  console.log("client======>", this.client)
  this.http.post('http://localhost:3000/Client/create', this.client)
      .subscribe(response => {
        this.showToast('top-right', 'success','added successfully');
      //  this.initModel()
        console.log(response);
      }, (err) => {
        this.showToast('top-right', 'danger', err.message);
       console.log ('Oooops!',err);
      });
  }

}

