import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupTableComponent } from '../group-table/group-table.component';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  
  @ViewChild(GroupTableComponent) child:GroupTableComponent | undefined;
  

  group:any={};
  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;
  activeGroupList:any=[];
  edit:boolean=false;
  groupbyCategory:any={};
  uniqueGroup:any=[];

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.displayGroup();
  }
  saveGroup()
  {
    return this.service.saveGroup(this.group).subscribe(res=>{
      console.log("group",res);

      console.log("groupName",  this.group.groupName) ;
      console.log("groupCategory",  this.group.groupCategory) ;
      this.group.groupName=this.group.groupCategory;
      this.group.groupCategory='';
      console.log("groupName",  this.group.groupName) ;
      console.log("groupCategory",  this.group.groupCategory) ;

      //  this.child?.AllGroup();
      Swal.fire({
        title: 'Added Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(()=>{    
        this.group={};
        this.child?.AllGroup();
      });
      this.showFlash=true;
      this.showFlashError=false;
      this.group='';
      this.displayGroup();
      


    },err=>{
      console.log("error in component", err) ;
      if(err.status==400)
      {
        if(err.error=="groupCategory already taken")
        {
          this.errorMessage="Group already Exists .";
          this.showFlashError=true;
          this.showFlash=false;
        }
        
        else
        {
          this.errorMessage="Please fill all the fields .";
          this.showFlashError=true;
          this.showFlash=false;
  
        }
       
      }
      else if(err.status==415 )
      {
        this.errorMessage=" Please refresh once..";
        this.showFlashError=true;
        this.showFlash=false;
      }
      else if(err.status==422 || 500)
      {
        this.errorMessage=" Backend Issue..";
        this.showFlashError=true;
        this.showFlash=false;

      }
     
    })
  }

 displayGroup()
 {
   return this.service.AllGroup().subscribe(res=>{
     console.log("res",res);
     this.getGroups=res;
     
     
    //  for(var i=0 ;i<this.getGroups.length ; i++)
    //  {
    //   if(this.getGroups[i].active==true)
    //     {
    //       this.activeGroupList.push(this.getGroups[i]);
    //       console.log("ACTIVE",this.activeGroupList)
    //     }
      
    //   for(var j=i+1 ; j<this.activeGroupList.length ;j++)
    //   {
    //     console.log("groupCategory",this.activeGroupList[i].groupCategory);

    //     console.log("groupName",this.activeGroupList[j].groupName);

    //     if(this.activeGroupList[j].groupName==this.activeGroupList[i].groupCategory) 
    //     {
    //       console.log("hello");
    //       this.activeGroupList[j].groupName=this.activeGroupList[i].groupName  + "/" +this.activeGroupList[i].groupCategory

    //     }
    //     else{
    //       console.log(" nithello");
    //     }
    //   }
       
   
    //  };
    //  console.log("fghj");
   })
 }
 getUniueGroup()
 {
  return this.service.getUniqueGroup().subscribe(res=>
    {
      console.log("uniquegroup",res);
      this.uniqueGroup=res;
    }
  )
 }
 getWholegroup(event:any)
 {
  console.log("whole",event.target.value);
 

 }
 getGroup(event:any)

 {
   console.log("groupinput",this.group)
 
   this.child?.dataintext;
   console.log("child",this.child?.dataintext.groupName);
   this.group.groupName=(<HTMLInputElement>document.getElementById('groupName')).value=this.child?.dataintext.groupName;
  this.group.FirmName=(<HTMLInputElement>document.getElementById('groupCategory')).value=this.child?.dataintext.groupCategory;
 

  this.buttonAdd=false;
  this.buttonEdit=true;
  console.log("groupinput",this.group)
 
   }

   EditGroup(event:any)
   {

  
   console.log("edit",this.child?.groupCatrTarget);
   this.service.getGroupByCategory(this.child?.groupCatrTarget).subscribe(res=>{
    console.log("targ",res);
    this.groupbyCategory=res;
    console.log("targ",this.groupbyCategory.groupId);
    if( this.group.groupCategory=='')
     {
       this.errorMessage="Please fill all the fields";
       this.showFlashError=true;
       this.showFlash=false;
       return false;
     }
     else{
      console.log("targ",this.groupbyCategory.groupId);
       return this.service.EditGroup(this.groupbyCategory.groupId,this.group).subscribe(res=>
         { 
           
     
         console.log("editted",res);
     
         Swal.fire({
           title: 'Editted Successfully',
           icon: 'success',
           confirmButtonText: 'OK',
         }).then(()=>{ 
          this.buttonAdd=true;
          this.buttonEdit=false;
          this.group={};
        this.child?.AllGroup();
         });
       },(err:any)=>{
         console.log("error in component", err) ;
         if(err.status==400)
         {
           if(err.error=="group already Exists")
           {
             this.errorMessage="group already Exists .";
             this.showFlashError=true;
             this.showFlash=false;
           }
           
           else
           {
             this.errorMessage="Please fill all the fields .";
             this.showFlashError=true;
             this.showFlash=false;
     
           }
          
         }
         else if(err.status==404 )
         {
           this.errorMessage=" Group category not found !!";
           this.showFlashError=true;
           this.showFlash=false;
         }
         else if(err.status==422 || 500)
         {
           this.errorMessage=" Backend Issue..";
           this.showFlashError=true;
           this.showFlash=false;
     
         }
        
       })
     }
   })
  
   }
   getGroupDataToInput(event:any)

   {
    
    
   this.edit=true;
      
   
    this.group.groupName=(<HTMLSelectElement>document.getElementsByClassName('selectGroupName')).value=this.child?.dataintext.groupName;
    this.group.groupCategory=(<HTMLInputElement>document.getElementById('groupCategory')).value=this.child?.dataintext.groupCategory;
    this.buttonAdd=false;
    this.buttonEdit=true;
    // console.log("groupinput",this.group.IFSC_Code)
    console.log("resgroupbycatr",event.target.value);

   
   
     }

}
function e(e: any) {
  throw new Error('Function not implemented.');
}

