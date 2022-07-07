import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  party:any={};
  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.party.Party_Type='';
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
 
 
  saveparty()
  {
   return this.service.saveparty(this.party).subscribe(res=>{
     console.log("group",res);
 
 
     //  this.child?.AllGroup();
     Swal.fire({
       title: 'Added Successfully',
       icon: 'success',
       confirmButtonText: 'OK',
     }).then(()=>{    window.location.reload();
     });
     this.showFlash=true;
     this.showFlashError=false;
     this.party='';
     // this.displayGroup();
     
 
 
   },(err:any)=>{
     console.log("error in component", err.error.errors) ;
     if(err.status==400)
     {
      if(err.error=="The City field is required")
      {
        this.errorMessage="City field is required";
        this.showFlashError=true;
        this.showFlash=false;
      }
      
       else if(err.error=="Party already Exists")
       {
         this.errorMessage="party already Exists !!";
         this.showFlashError=true;
         this.showFlash=false;
       }
       else if(err.error.errors.PIN_No='Pin No cannot exceed 6 characters')
       {
        this.errorMessage="Pin No must be of 6 characters";
         this.showFlashError=true;
         this.showFlash=false;
       }
      
       else if(err.error.errors.Phone_No='Not a valid phone number')
       {
        this.errorMessage="Not a valid phone number";
         this.showFlashError=true;
         this.showFlash=false;
       }
       
       else if(err.err='Invalid Email Address')
       {
         this.errorMessage="Invalid Email Address";
         this.showFlashError=true;
         this.showFlash=false;
       }
       else if(err.err='GST No cannot be same!')
       {
        this.errorMessage="GST No cannot be same!";
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
     else if(err.status==422||500 )
     {
       this.errorMessage=" Backend Issue..";
       this.showFlashError=true;
       this.showFlash=false;
 
     }
    
    //  else if(err.status==500)
    //  {
    //   this.errorMessage="Party already Exists";
    //   this.showFlashError=true;
    //   this.showFlash=false;
    //  }
   })
  }

}
