import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact.model';

@Component({
  selector: 'view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  loadingIndicator: boolean = false;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number=10;
  contact:ContactModel;
  search: string;
  index: number;
  order: string;
  direction: string;
  roleTemplate: any;
  constructor() { }

  ngOnInit() {
    this.columns = [
      { prop: '', name: 'PHONE NUMBER' },
       { prop: '', name: 'Name' },
      { prop: '', name: 'EMAIL' },
      { prop: '', name: 'USER NAME' },
      { prop: '', name: 'COMPANY' },
    ];
    this.loadData();
  }

  loadData() {
    this.dataList;
   }

  changePage(pageInfo) {
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
  }
  
}
