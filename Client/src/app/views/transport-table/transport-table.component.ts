import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transport-table',
  templateUrl: './transport-table.component.html',
  styleUrls: ['./transport-table.component.scss']
})
export class TransportTableComponent implements OnInit {
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  searchText="";
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
  groupCatrTarget:string='';
  dataintext:any;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.AllTransport();
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

  AllTransport()
  {
   return this.service.AllTransport().subscribe(res=>{
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

  edit(branch:any)
{
   this.groupCatrTarget=branch;
  return this.service.getTransporterByGSTNo(branch).subscribe(res=>{

      console.log("getBranchbyid",res);
      this.dataintext=res;
      this.parentFun.emit();
     
  })
}
search(){
  if(this.searchText!== "")
  {
    let searchValue = this.searchText.toLocaleLowerCase();
   
    this.getItem = this.getItem.filter((contact:any) =>
    {
      if(!contact.transporter_Name.toLocaleLowerCase().match(searchValue ))
      {
        this.isData=false;
        this.noData="Data Not Found";
      }
      else
      {
        return contact.transporter_Name.toLocaleLowerCase().match(searchValue );

      }
    
     });
          
    }
     else 
     { 
      this.service.AllTransport().subscribe(res=>{
        this.getItem=res;
        
      });
     } 
    }
}
