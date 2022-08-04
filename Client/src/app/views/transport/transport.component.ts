import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';
import { TransportTableComponent } from '../transport-table/transport-table.component';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  @ViewChild(TransportTableComponent) child:TransportTableComponent | undefined;


  Transport:any={};
  getTax:any=[];
  Tax:any=[];
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;
  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  edit:boolean=false;
  groupbyCategory:any={};
  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
  }
save()
{
  if(!this.Transport.Transporter_Name || !this.Transport.GST_No || !this.Transport.Address || !this.Transport.Phone_No || !this.Transport.City || !this.Transport.Email || !this.Transport.State || !this.Transport.Contact_Person )
  {
   this.errorMessage="Please fill all the fields !!";
   this.showFlashError=true;
   this.showFlash=false;
  return false;
  }
  else{
    return this.service.saveTransport(this.Transport).subscribe(res=>{
      console.log("res",res);
     
      Swal.fire({
        title: 'Added Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(()=>{   
         this.showFlashError=false;

            this.buttonAdd=true;
            this.buttonEdit=false;
            this.Transport={};
            this.child?.AllTransport();
      });
      this.showFlashError=false;
    },err=>{
      console.log("error in component", err.status) ;
    
      if(err.status==400)
      {
        console.log("error",err.error.errors);
        console.log("error",err.error.errors.Email);
  
        
        if(err.error.errors.Email=="Invalid Email Address")
        {
          this.errorMessage="Invalid Email Address .";
          this.showFlashError=true;
          this.showFlash=false;
        }
        else if(err.error.errors.Phone_No=="Not a valid phone number")
        {
          this.errorMessage="Not a valid phone number !!";
          this.showFlashError=true;
          this.showFlash=false;
        }
        else if(err.error.errors.GST_No=="Not a valid GSTNo number")
        {
            this.errorMessage="Invalid GST No !!";
            this.showFlashError=true;
            this.showFlash=false;
        
         
        }
        
         else if(err.error.errors=="Only positive number allowed")
        {
          this.errorMessage="Only positive number allowed.";
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
     
    }
    )
  }
  
}

getGroupDataToInput(event:any)

   {
    
    
   this.edit=true;
   console.log("resgroupbycatr",this.child?.dataintext);

   
    this.Transport.Transporter_Name=(<HTMLInputElement>document.getElementById('Transporter_Name')).value=this.child?.dataintext.transporter_Name;
    this.Transport.GST_No=(<HTMLInputElement>document.getElementById('GST_No')).value=this.child?.dataintext.gsT_No;
    this.Transport.Address=(<HTMLInputElement>document.getElementById('Address')).value=this.child?.dataintext.address;
    this.Transport.Phone_No=(<HTMLInputElement>document.getElementById('Phone_No')).value=this.child?.dataintext.phone_No;
    this.Transport.City=(<HTMLInputElement>document.getElementById('City')).value=this.child?.dataintext.city;
    this.Transport.Email=(<HTMLInputElement>document.getElementById('Email')).value=this.child?.dataintext.email;
    this.Transport.State=(<HTMLInputElement>document.getElementById('State')).value=this.child?.dataintext.state;
    this.Transport.Contact_Person=(<HTMLInputElement>document.getElementById('Contact_Person')).value=this.child?.dataintext.contact_Person;



    this.buttonAdd=false;
    this.buttonEdit=true;
    // console.log("groupinput",this.group.IFSC_Code)
    console.log("resgroupbycatr",event.target.value);

   
   
     }



     Edit(event:any)
     {
  
     console.log("edit",this.child?.groupCatrTarget);
     this.service.getTransporterByGSTNo(this.child?.groupCatrTarget).subscribe(res=>{
      console.log("targ",res);
      this.groupbyCategory=res;
      console.log("targ",this.groupbyCategory.transporter_ID);
      if( this.Transport.Transporter_Name=='' || this.Transport.GST_No=='' ||this.Transport.Address=='' ||this.Transport.City=='' ||this.Transport.State=='' ||this.Transport.Phone_No=='' ||this.Transport.Email=='' ||this.Transport.Contact_Person=='' )
       {
         this.errorMessage="Please fill all the fields";
         this.showFlashError=true;
         this.showFlash=false;
         return false;
       }
       else{
        console.log("targ",this.groupbyCategory.transporter_ID);
         return this.service.EditTransport(this.groupbyCategory.transporter_ID,this.Transport).subscribe(res=>
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
            this.Transport={};
            this.child?.AllTransport();
           });
         },
         err=>{
        console.log("error in component", err.status) ;
        
          if(err.status==400)
          {
            console.log("error",err.error);
            
            if(err.error.errors.Email=="Invalid Email Address")
            {
              this.errorMessage="Invalid Email Address .";
              this.showFlashError=true;
              this.showFlash=false;
              
            }
            else if(err.error.errors.Phone_No=="Not a valid phone number")
            {
              this.errorMessage="Not a valid phone number !!";
              this.showFlashError=true;
              this.showFlash=false;
            }
            else if(err.error.errors.GST_No=="Not a valid GSTNo number")
            {
                this.errorMessage="Invalid GST No !!";
                this.showFlashError=true;
                this.showFlash=false;
            
             
            }
            
            else if(err.error.errors=="Only positive number allowed")
            {
              this.errorMessage="Only positive number allowed.";
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
         
        }
         )
       }
     })
    
     }
}
