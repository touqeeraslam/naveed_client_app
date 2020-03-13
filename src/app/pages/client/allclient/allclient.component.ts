import { Component, OnInit } from '@angular/core';
import { User } from '../../../view-models/user';

@Component({
  selector: 'allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.scss']
})
export class AllclientComponent implements OnInit {

  constructor() { }

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
}
