import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-bank-table',
  templateUrl: './bank-table.component.html',
  styleUrls: ['./bank-table.component.scss']
})
export class BankTableComponent implements OnInit {

@Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  getGroup:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined;
  noData:string | undefined;
  date:Date| undefined;
  dataintext:any;
  // buttonEdit:boolean=true;
  // buttonDone:boolean=false;


  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllBank();
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

  AllBank()
 {
  return this.service.AllBank().subscribe(res=>{
    this.getGroup=res;
    console.log("allGroup",this.getGroup);
    if(this.getGroup.length==0)
    {
     this.noData="No Data Found";
     this.isData=false;
     console.log("byugunh",this.getGroup);
    }
    else{
      this.isData=true;
    }
  })
 }
edit(bank:any)
{
    console.log("itemstargeted",bank.target.value);

  return this.service.getBankById(bank.target.value).subscribe(res=>{

      console.log("getBankbyid",res);
      this.dataintext=res;
      this.parentFun.emit();
     
  })
}


}
