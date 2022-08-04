import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  searchText="";
  getItem:any=[];
  dataTable:any;
  getPurchases:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=10;
  tableSizes:any=[10,15,20];
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

  edit(branch:any)
  {
    // console.log("getBranchbyid",branch.target.value);

     this.groupCatrTarget=branch;
    return this.service.getItemByItemName(branch).subscribe(res=>{
  
        console.log("getBranchbyid",res);
        this.dataintext=res;
        console.log("getBranchbyid", this.dataintext);

        this.parentFun.emit();
       
    })
  }
  search(){
    if(this.searchText!== "")
    {
      let searchValue = this.searchText.toLocaleLowerCase();
     
      this.getItem = this.getItem.filter((contact:any) =>
      {
        return contact.itemName.toLocaleLowerCase().match(searchValue );
      
       });
            
      }
       else 
       { 
        this.service.AllItem().subscribe(res=>{this.getItem=res});
       } 
      }
}

