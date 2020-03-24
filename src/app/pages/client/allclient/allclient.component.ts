import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.scss']
})
export class AllclientComponent implements OnInit {

  loadingIndicator: boolean = false;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number;
  search: string;
  order: string;
  direction: string;

  ngOnInit() {
    this.columns = [
      {name: 'Actions', prop: 'id'},
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
 
  constructor(private service: ClientService,public router:Router) { 
    const data = this.service.getData().subscribe(res=>{
      this.dataList = res;
      console.log(this.dataList);
      console.log(res);
    });
  }

}