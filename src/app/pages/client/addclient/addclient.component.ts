import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  private firstname:string;
  private lastname:string;
  private company:string;
  private website: string;
  private email: string;
 private username: string;
 private password: string;
 private confirmpassword: string;
 private phone: Number;
 private address: string;
 private moreaddress: string;
 private state: any;
 private city: any;
 private passcode: any;
 private smslimit: any;
 private selectedapiNgModel: string;
 private selectedpanelNgModel: string;
 private selectedcountryNgModel: string;
 private selectedclientNgModel: string;
 private selectedgatewayNgModel: string;
  data:any;
  message:string;
  // selectedItemNgModel;
  // selectedItem = '2';

  constructor(public http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  allclient()
{
  const data = {
    fname : this.firstname,
    lname: this.lastname,
    company: this.company,
    website: this.website,
    email: this.email,
    username: this.username,
    password: this.password,
    confirmpassword: this.confirmpassword,
    phone: this.phone,
    address1: this.address,
    state: this.state,
    moreaddress: this.moreaddress,
    city: this.city,
    postcode: this.passcode,
    country: this.selectedcountryNgModel,
    panel: this.selectedpanelNgModel,
    smslimit: this.smslimit,
    apiaccess: this.selectedapiNgModel,
    clientgroup: this.selectedclientNgModel,
    smsgateway: this.selectedgatewayNgModel,
  };
  this.http.post('http://localhost:3000/Client/create', data)
      .subscribe(response => {
        console.log(response);
      }, () => {
       console.log ('Oooops!');
      });
  }
// this.firstname = null;
// this.lastname = null;
// this.company =null;
// this.message="form submit";
}

