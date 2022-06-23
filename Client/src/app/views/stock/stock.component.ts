import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  dataTable:any;
  getPurchases:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined;
  noData:string | undefined;
  date:Date| undefined;
  constructor() { }

  ngOnInit(): void {
  }

  OnTableDataChange(event:any)
  {
    this.page = event;
 
    // this.getAllPurchase();
    // this.getDate();
    }
 
  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    // this.getAllPurchase();
  }

}
