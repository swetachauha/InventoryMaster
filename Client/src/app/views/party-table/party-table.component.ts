import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-party-table',
  templateUrl: './party-table.component.html',
  styleUrls: ['./party-table.component.scss']
})
export class PartyTableComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  searchText='';
  getParty:any=[];
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
    this.AllParty();
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

  AllParty()
  {
   return this.service.allParty().subscribe(res=>{
     this.getParty=res;
     console.log("allGroup",this.getParty);
     if(this.getParty.length==0)
     {
      this.noData="No Data Found";
      this.isData=false;
      console.log("byugunh",this.getParty);
     }
     else{
       this.isData=true;
     }
   })
  }
  edit(branch:any)
  {
     this.groupCatrTarget=branch;
    return this.service.getPartyByGST(branch).subscribe(res=>{
  
        console.log("getBranchbyid",res);
        this.dataintext=res;
        this.parentFun.emit();
       
    })
  }
  search(){
    if(this.searchText!== "")
    {
      let searchValue = this.searchText.toLocaleLowerCase();
     
      this.getParty = this.getParty.filter((contact:any) =>
      {
        if(!contact.party_Name.toLocaleLowerCase().match(searchValue ))
        {
          this.isData=false;
          this.noData="Data Not Found";
        }
        else
        {
          return contact.party_Name.toLocaleLowerCase().match(searchValue );

        }
      
       });
            
      }
       else 
       { 
        this.service.allParty().subscribe(res=>{
          this.getParty=res;
          
        });
       } 
      }

}
