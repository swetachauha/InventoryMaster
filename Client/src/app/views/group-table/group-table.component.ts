import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();


  dataTable:any;
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


  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllGroup();
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

  AllGroup()
 {
  return this.service.AllGroup().subscribe(res=>{
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

 edit(branch:any)
{

  return this.service.getBranchById(branch.target.value).subscribe(res=>{

      console.log("getBranchbyid",res);
      this.dataintext=res;
      this.parentFun.emit();
     
  })
}
}
