import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';
import { PartyTableComponent } from '../party-table/party-table.component';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  @ViewChild(PartyTableComponent) child:PartyTableComponent | undefined;

  party:any={};
  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;
  edit:boolean=false;
  groupbyCategory:any={};



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
      Swal.fire({
       title: 'Added Successfully',
       icon: 'success',
       confirmButtonText: 'OK',
     }).then(()=>{   
      this.showFlashError=false;

            this.buttonAdd=true;
            this.buttonEdit=false;
            this.party={};
            this.child?.AllParty();
     });
     this.showFlash=true;
     this.showFlashError=false;
     this.party='';
     // this.displayGroup();
     
 
 
   },
   (err:any)=>{
     if(this.party.Party_Name==''|| this.party.Party_Name==''||this.party.Party_Type==''||this.party.GST_No==''||this.party.PAN_No==''||this.party.Contact_Person==''||this.party.Phone_No==''||this.party.Party_Name==''||this.party.Email==''||this.party.City==''||this.party.Party_Address=='' ||this.party.State==''|| this.party.PIN_No=='' )
     {
       this.errorMessage="Please fill all the fields !!";
       this.showFlashError=true;
       this.showFlash=false;
       window.scroll(0,0);
     }
     else if(err.status==400)
     {
      
       if(err.error.errors.GST_No=="GST No cannot exceed 10 characters")
       {
         this.errorMessage="Invalid GST No";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error.errors.Phone_No=="The Phone_No field is required.")
       {
         this.errorMessage="Phone_No field is required !!";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error=="Party already Exists")
       {
         this.errorMessage="party already Exists !!";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       
       else if(err.error.errors.Phone_No=='Not a valid phone number')
       {
         this.errorMessage='Not a valid phone number !!';
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error.errors.Email=='Invalid Email Address')
       {
         this.errorMessage="Invalid Email Address !!";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error.errors.PAN_No=='Invalid PAN No')
       {
         this.errorMessage="Invalid PAN No !!";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error.errors.PIN_No=='Pin No cannot exceed 6 characters')
       {
         this.errorMessage="Pin No cannot exceed 6 characters";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
       else if(err.error.errors.PIN_No='Pin No cannot exceed 6 characters')
       {
        this.errorMessage="Pin No must be of 6 characters";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
       }
      
       else if(err.err='GST No cannot be same!')
       {
        this.errorMessage="GST No cannot be same!";
        this.showFlashError=true;
        this.showFlash=false;
        window.scroll(0,0);
       }
       
       else
       {
         this.errorMessage="Please fill all the fields .";
         this.showFlashError=true;
         this.showFlash=false;
         window.scroll(0,0);
 
       }
      
     }
     else if(err.status==415 )
     {
       this.errorMessage=" Please refresh once..";
       this.showFlashError=true;
       this.showFlash=false;
       window.scroll(0,0);
     }
     else if(err.status==422||500 )
     {
       this.errorMessage=" Backend Issue..";
       this.showFlashError=true;
       this.showFlash=false;
       window.scroll(0,0);
 
     }
    
    //  else if(err.status==500)
    //  {
    //   this.errorMessage="Party already Exists";
    //   this.showFlashError=true;
    //   this.showFlash=false;
    //  }
   })
  }
  getGroupDataToInput(event:any)

  {
   
   
  this.edit=true;
     
  
   this.party.Party_Name=(<HTMLSelectElement>document.getElementsByClassName('Party_Name')).value=this.child?.dataintext.party_Name;
   this.party.GST_No=(<HTMLInputElement>document.getElementById('GST_No')).value=this.child?.dataintext.gsT_No;
   this.party.PAN_No=(<HTMLInputElement>document.getElementById('PAN_No')).value=this.child?.dataintext.paN_No;
   this.party.Contact_Person=(<HTMLInputElement>document.getElementById('Contact_Person')).value=this.child?.dataintext.contact_Person;
   this.party.Phone_No=(<HTMLInputElement>document.getElementById('Phone_No')).value=this.child?.dataintext.phone_No;
   this.party.Email=(<HTMLInputElement>document.getElementById('Email')).value=this.child?.dataintext.email;
   this.party.City=(<HTMLInputElement>document.getElementById('City')).value=this.child?.dataintext.city;
   this.party.Party_Address=(<HTMLInputElement>document.getElementById('Party_Address')).value=this.child?.dataintext.party_Address;
   this.party.State=(<HTMLInputElement>document.getElementById('State')).value=this.child?.dataintext.state;
   this.party.PIN_No=(<HTMLInputElement>document.getElementById('PIN_No')).value=this.child?.dataintext.piN_No;
   this.party.Party_Type=(<HTMLSelectElement>document.getElementsByClassName('Party_Type')).selectedIndex=this.child?.dataintext.party_Type;
  //  this.item.IGST=(<HTMLSelectElement>document.getElementById('igst')).selectedIndex=this.child?.dataintext.igst;

   this.buttonAdd=false;
   this.buttonEdit=true;
   // console.log("groupinput",this.group.IFSC_Code)
   console.log("resgroupbycatr",event.target.value);

  
  
    }


    Edit(event:any)
    {
 
    console.log("edit",this.child?.groupCatrTarget);
    this.service.getPartyByGST(this.child?.groupCatrTarget).subscribe(res=>{
     console.log("targ",res);
     this.groupbyCategory=res;
     console.log("targ",this.groupbyCategory.id);
     if( !this.party.Party_Name || !this.party.GST_No ||!this.party.PAN_No ||!this.party.Contact_Person ||!this.party.Phone_No ||!this.party.Email ||!this.party.City ||!this.party.Party_Address ||!this.party.State ||!this.party.PIN_No ||!this.party.Party_Type )
      {
        this.errorMessage="Please fill all the fields";
        this.showFlashError=true;
        this.showFlash=false;
        window.scroll(0,0);
                return false;
      
      }
      else{
       console.log("targ",this.groupbyCategory.groupId);
        return this.service.EditParty(this.groupbyCategory.id,this.party).subscribe(res=>
          { 
          console.log("editted",res);
      
          Swal.fire({
            title: 'Editted Successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(()=>{
            this.showFlashError=false;

            this.buttonAdd=true;
            this.buttonEdit=false;
            this.party={};
            this.child?.AllParty();
          });
        },(err:any)=>{
          
        if(err.status==400)
          {
           
            if(err.error.errors.GST_No=="GST No cannot exceed 10 characters")
            {
              this.errorMessage="Invalid GST No";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            else if(err.error.errors.Phone_No=="The Phone_No field is required.")
            {
              this.errorMessage="Phone_No field is required !!";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            else if(err.error=="Party already Exists")
            {
              this.errorMessage="party already Exists !!";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            
            else if(err.error.errors.Phone_No=='Not a valid phone number')
            {
              this.errorMessage='Not a valid phone number !!';
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            else if(err.error.errors.Email=='Invalid Email Address')
            {
              this.errorMessage="Invalid Email Address !!";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            else if(err.error.errors.PAN_No=='Invalid PAN No')
            {
              this.errorMessage="Invalid PAN No !!";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
            else if(err.error.errors.PIN_No=='Pin No cannot exceed 6 characters')
            {
              this.errorMessage="Pin No cannot exceed 6 characters";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
            }
           
            else if(err.err='GST No cannot be same!')
            {
             this.errorMessage="GST No cannot be same!";
             this.showFlashError=true;
             this.showFlash=false;
             window.scroll(0,0);
            }
            
            else
            {
              this.errorMessage="Please fill all the fields .";
              this.showFlashError=true;
              this.showFlash=false;
              window.scroll(0,0);
      
            }
           
          }
          else if(err.status==415 )
          {
            this.errorMessage=" Please refresh once..";
            this.showFlashError=true;
            this.showFlash=false;
            window.scroll(0,0);
          }
          else if(err.status==422||500 )
          {
            this.errorMessage=" Backend Issue..";
            this.showFlashError=true;
            this.showFlash=false;
            window.scroll(0,0);
      
          }
         
        })
      }
    })
   
    }

}


