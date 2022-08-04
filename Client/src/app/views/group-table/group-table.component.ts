import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';

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
  tableSize:number=10;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined;
  noData:string | undefined;
  date:Date| undefined;
  dataintext:any;
  groupCategory:any;
  activeGroupList:any=[];
   groupof={};
  groupCatrTarget:string='';
  searchText="";
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
    if(this.getGroup.length==0 )
    {
      
     this.noData="No Data Found";
     this.isData=false;
     console.log("byugunh",this.getGroup);
    }
    else{
      for(var i=0 ; i<this.getGroup.length;i++)
      {
        // console.log("ALLACTIVE",this.getGroup[i].active);
        // if(this.getGroup[i].active==true)
        // {
        //   this.activeGroupList.push(this.getGroup[i]);
        //   console.log("ACTIVE",this.activeGroupList)
        // }
      }
      this.isData=true;
    }
  })
 }

 edit(branch:any)
{
   this.groupCatrTarget=branch;
  return this.service.getGroupByCategory(branch).subscribe(res=>{

      console.log("getBranchbyid",res);
      this.dataintext=res;
      this.parentFun.emit();
     
  })
}


delete(event:any)
{ 

  for(var i=0;i<this.activeGroupList.length;i++)
{
  if(this.activeGroupList[i].groupCategory==event.target.value)
  {
    this.groupof=this.activeGroupList[i];
     this.deletec(event.target.value);

  }
 

}
}
deletec(event:any)
{
  
  //  this.deletec(event.target.value);

     return this.service.deleteGroup(event, this.groupof).subscribe(res=>{

      this.dataintext=res;
      this.parentFun.emit();
      Swal.fire({
        title: 'Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(()=>{    window.location.reload();
      });
  })
  

}



search(){
   if(this.searchText!== "")
   {
     let searchValue = this.searchText.toLocaleLowerCase();
    
     this.getGroup = this.getGroup.filter((contact:any) =>
     {
       return contact.groupCategory.toLocaleLowerCase().match(searchValue );
     
      });
           
     }
      else 
      { 
       this.service.AllGroup().subscribe(res=>{this.getGroup=res});
      } 
     }



}
