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
  rows: [] = [];
  page: number;
  search: string;
  order: string;
  direction: string;

  ngOnInit() {
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
    // this.page = page - 1;
    // this.loadingIndicator = true;
    // this.operationLogService.getOperationLogs(page, 10, this.search)
    //   .subscribe(response => {
    //     this.loadingIndicator = false;
    //     this.rows = response.data.result as [];
    //     this.totalPage = response.data.count;
    //   });
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
      this.rows = res;
      console.log(this.rows);
      console.log(res);
    });
  }

}