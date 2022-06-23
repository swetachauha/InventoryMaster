import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.scss']
})
export class TaxTableComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();


  dataTable:any;
  getTax:any=[];
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


  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllTax();
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

 AllTax()
 {
  return this.service.AllTax().subscribe(res=>{
    this.getTax=res;
    console.log("allTax",this.getTax);
    if(this.getTax.length==0)
    {
     this.noData="No Data Found";
     this.isData=false;
     console.log("byugunh",this.getTax);
    }
    else{
      this.isData=true;
    }
  })
 }
 edit(taxType:any)
 {
  console.log("GETTAX",taxType.target.value);

   return this.service.getTaxByType(taxType.target.value).subscribe(res=>{
 
       console.log("getBranchbyid",res);
       this.dataintext=res;
       this.parentFun.emit();
      
   })
 }
}
