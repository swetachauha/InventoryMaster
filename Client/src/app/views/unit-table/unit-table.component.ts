import { HttpBackend } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-unit-table',
  templateUrl: './unit-table.component.html',
  styleUrls: ['./unit-table.component.scss']
})
export class UnitTableComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  searchText='';
  dataTable:any;
  getUnits:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined;
  noData:string | undefined;
  date:Date| undefined;
  dataintext:any;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllUnits();
  }

  OnTableDataChange(event:any)
  {
    this.page = event;
    this.AllUnits();

    // this.getAllPurchase();
    // this.getDate();
    }
 
  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.AllUnits();

    // this.getAllPurchase();
  }


  AllUnits()
  {
    return this.service.AllUnits().subscribe(res=>{
      this.getUnits=res;
      console.log("allUnits",this.getUnits);
      if(this.getUnits.length==0)
      {
       this.noData="No Data Found";
       this.isData=false;
       console.log("byugunh",this.getUnits);
      }
      else{
        this.isData=true;
      }
    })
  }

  edit(unit:any)
 {

   return this.service.getUnit(unit).subscribe(res=>{
 
       console.log("getBranchbyid",res);
       this.dataintext=res;
       this.parentFun.emit();
      
   })
 }
 search(){
  if(this.searchText!== "")
  {
    let searchValue = this.searchText.toLocaleLowerCase();
    console.log("searchValue",searchValue);

    this.getUnits = this.getUnits.filter((contact:any) =>
    {
      if(!contact.unit.toLocaleLowerCase().match(searchValue ))
      {
        this.isData=false;
        this.noData="Data Not Found";
      }
      else
      {
        console.log("lowwer",contact.unit);
        return contact.unit.toLocaleLowerCase().match(searchValue );

      }
    
     });
          
    }
     else 
     { 
      this.service.AllUnits().subscribe(res=>{
        this.getUnits=res;
        
      });
     } 
    }
}
