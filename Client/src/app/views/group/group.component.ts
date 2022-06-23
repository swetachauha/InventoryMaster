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
      }).then(()=>{    window.location.reload();
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
     for(var i=0 ;i<this.getGroups.length ; i++)
     {
       console.log("for",this.getGroups.length);
      //  if(this.getGroups[i].groupCategory=='' && this.getGroups[i].groupName=="Primary" )
      //  {
      //   console.log("Primary");

      //  }
      
      for(var j=i+1 ; j<this.getGroups.length ;j++)
      {
        console.log("groupCategory",this.getGroups[i].groupCategory);

        console.log("groupName",this.getGroups[j].groupName);

        if(this.getGroups[j].groupName==this.getGroups[i].groupCategory)
        {
          console.log("hello");
          this.getGroups[j].groupName=this.getGroups[i].groupName  + "/" +this.getGroups[i].groupCategory

        }
        else{
          console.log(" nithello");
        }
      }
       
   
     };
     console.log("fghj");
   })
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

   EditGroup(group:any)
   {
     console.log("groupid",this.group.groupId);
     if(this.group.groupName=='' ||this.group.FirmName==''|| this.group.Address=='' || this.group.City==''  || this.group.groupId=='')
     {
       this.errorMessage="Please fill all the fields";
       this.showFlashError=true;
       this.showFlash=false;
       return false;
     }
     else{
       return this.service.EditGroup(this.group.groupId,this.group).subscribe(res=>
         { 
           
     
         console.log("editted",res);
     
         Swal.fire({
           title: 'Editted Successfully',
           icon: 'success',
           confirmButtonText: 'OK',
         }).then(()=>{ window.location.reload();});
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
           this.errorMessage=" IFSC Code not found !!";
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
   }

}
