import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  getItem:any=[];
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
  errorMessage:String | undefined;
  

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllItems();
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

  AllItems()
  {
   return this.service.AllItem().subscribe(res=>{
     this.getItem=res;
     console.log("allGroup",this.getItem);
     if(this.getItem.length==0)
     {
      this.noData="No Data Found";
      this.isData=false;
      console.log("byugunh",this.getItem);
     }
     else{
       this.isData=true;
     }
   })
  }
}
