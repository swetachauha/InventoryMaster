import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { cibToshiba } from '@coreui/icons';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ImageLComponent } from '../image-l/image-l.component';
import { DefaultLayoutComponent } from 'src/app/containers';
@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss']
})
export class FirmComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  //  @ViewChild (ImageLComponent) child:ImageLComponent | undefined;
  public files: any[] ;

  selectedFile!: File[];
  firm:any={};
  image:any;
  file:any; 
  banks:any=[];
  saved:boolean=false;
  firmDetails:any={};
  firmGST:any=[];
  gst:any | undefined;
  choose:any=true;
  editContent:boolean | undefined=false;
  clickedEdit:boolean | undefined=false;
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  Firm:any=[];

  constructor(private service:InventoryServiceService , private router:Router ,private def:DefaultLayoutComponent) { this.files = [];}

  ngOnInit(): void {
    this.getAllBanks();
    this.getFirm();

  }
scrollTop()
{
  window.scroll(0,0);

}
  saveFirm()
  {
    
    return this.service.Upload(this.firm).subscribe(res=>{
      console.log("fiem",res);
      console.log("fiem",this.firm.GST_No);
      this.getFirm();
      this.showFlashError=false;
        this.showFlash=true;
        this.scrollTop();

    },err=>{
      
       if(err.status==400)
    {
      if(err.error.errors.GST_No=="GST No cannot exceed 10 characters")
      {
        this.errorMessage="Invalid GST No !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
      // console.log("ereroe",err.error.errors)
     else if(err.error.errors.PAN_No=="Invalid PAN No")
      {
        this.errorMessage="Invalid PAN No !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     else if(err.error.errors.Contact_Mobile=="Not a valid phone number")
      {
        this.errorMessage="Invalid Phone No !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     else if(err.error.errors.Email=="Invalid Email Address")
      {
        this.errorMessage="Invalid Email Address !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     else if(err.error.errors.Website=="Not a valid website URL")
      {
        this.errorMessage="Invalid Website Url !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     else if(err.error.errors.Account_No=="Account No cannot exceed 16 digits")
      {
        this.errorMessage="Invalid Account No !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     else if(err.error.errors.IFSC_Code=="Invalid IFSC Code")
      {
        this.errorMessage="Invalid IFSC Code !!";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }

    }
    // else{
      
    // }
    })
  }

getFirm()
{
  return this.service.getFirm().subscribe(res=>{
    console.log("firmgst",res);
   
    this.firmDetails=res;
    if( this.firmDetails.length!=0)
    {
      if(this.firmDetails[0].firmLogo)
      {
        console.log("poto",this.firmDetails[0].firmLogo)
        this.image=this.firmDetails[0].firmLogo;
      }
      else
      {
        this.image='data:image/png;base64,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';
      }
      this.saved=true;
      this.gst=this.firmDetails[0].gsT_No;
     
    }
    else
    {
      this.image='data:image/png;base64,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';
    }
   

  })
}
getGSTforPurchase()
{
  console.log("label",(<HTMLLabelElement>document.getElementById('GST')).textContent);

 const gst = (<HTMLLabelElement>document.getElementById('GST')).textContent;
 console.log("label",(<HTMLLabelElement>document.getElementById('GST')).textContent);

 console.log("gst",gst)
}
  getAllBanks()
  {
    this.service.AllBank().subscribe(res=>{
      console.log("banks",res);
      this.banks=res;
    })
  }
  
  edit()
  {
    this.editContent=true;
    this.clickedEdit=true;
     
     setTimeout(()=>{this.fill();},100);
  }
  fill()
  {
    this.firm.FirmName=(<HTMLInputElement>document.getElementById('firmName')).value=this.firmDetails[0].firmName;
    this.firm.FirmAddress=(<HTMLInputElement>document.getElementById('firmAddress')).value=this.firmDetails[0].firmAddress;
    this.firm.GST_No=(<HTMLInputElement>document.getElementById('gstNo')).value=this.firmDetails[0].gsT_No;
    this.firm.PAN_No=(<HTMLInputElement>document.getElementById('panNo')).value=this.firmDetails[0].paN_No;
    this.firm.Reg_No=(<HTMLInputElement>document.getElementById('regNo')).value=this.firmDetails[0].reg_no;
    this.firm.FSSAI_No=(<HTMLInputElement>document.getElementById('ifsc')).value=this.firmDetails[0].fssaI_No;
    this.firm.Contact_Person=(<HTMLInputElement>document.getElementById('contactPerson')).value=this.firmDetails[0].contact_Person;
    this.firm.Contact_Mobile=(<HTMLInputElement>document.getElementById('contactMobile')).value=this.firmDetails[0].contact_Mobile;
    this.firm.Email=(<HTMLInputElement>document.getElementById('email')).value=this.firmDetails[0].email;
    this.firm.Website=(<HTMLInputElement>document.getElementById('website')).value=this.firmDetails[0].website;
    this.firm.Bank_Name=(<HTMLInputElement>document.getElementById('bankName')).value=this.firmDetails[0].bank_Name;
    this.firm.Account_No=(<HTMLInputElement>document.getElementById('accountNo')).value=this.firmDetails[0].account_No;
    this.firm.IFSc_Code=(<HTMLInputElement>document.getElementById('ifsc')).value=this.firmDetails[0].ifsC_Code;
    this.firm.Bank_Address=(<HTMLInputElement>document.getElementById('bankAddress')).value=this.firmDetails[0].bank_Address;


   
  }

 

  updated()
  {
    return this.service.getFirm().subscribe(res=>{
        this.Firm=res;
        console.log("firmmmm",this.Firm[0].id);
        return this.service.EditFirm(this.firm ,this.Firm[0].id).subscribe(res=>
          { 
           console.log("editfirm",res);
           console.log("saveboolean",this.saved);
           Swal.fire({
             title: 'Edited Successfully',
             icon: 'success',
             confirmButtonText: 'OK',
           }).then(()=>{   
            // this.getFirm();
              this.getFirm();
           });
           this.editContent=false;
     
           this.clickedEdit=false;
          
           },err=>{
           
             if(err.status==400)
          {
            if(err.error.errors.GST_No=="GST No cannot exceed 10 characters")
            {
              this.errorMessage="Invalid GST No !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
            // console.log("ereroe",err.error.errors)
           else if(err.error.errors.PAN_No=="Invalid PAN No")
            {
              this.errorMessage="Invalid PAN No !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
           else if(err.error.errors.Contact_Mobile=="Not a valid phone number")
            {
              this.errorMessage="Invalid Phone No !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
           else if(err.error.errors.Email=="Invalid Email Address")
            {
              this.errorMessage="Invalid Email Address !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
           else if(err.error.errors.Website=="Not a valid website URL")
            {
              this.errorMessage="Invalid Website Url !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
           else if(err.error.errors.Account_No=="Account No cannot exceed 16 digits")
            {
              this.errorMessage="Invalid Account No !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
           else if(err.error.errors.IFSC_Code=="Invalid IFSC Code")
            {
              this.errorMessage="Invalid IFSC Code !!";
              this.showFlashError=true;
              this.showFlash=false;
              this.scrollTop();
      
            }
      
          }
         }
         )
    })
    
  
  }

  onFileSelected(event:any)
  {
    console.log("firmimage",event.target.files[0]);
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{

      this.image=reader.result;

      console.log("image",this.image)
    }
    this.choose=false;
  }


  upload()
  {
    var img=this.image;

    const logo=
    {
      'FirmLogo':img,
    }
    return this.service.UploadImage(logo,this.firmDetails[0].paN_No).subscribe(res=>
      {
        this.getFirm();
        Swal.fire({
          title: 'Uploaded Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(()=>{
          this.def.ngOnInit();
        
          // .location.reload();
          // this.newItemEvent.emit(img);
          // this.router.navigateByUrl('/firmMaster', {skipLocationChange: true}).then(() => {
          //   this.router.navigateByUrl('/firmMaster'); });
              });
      this.choose=true;
      
      }
    )
  }


  remove()
  {
    this.image='data:image/png;base64,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';


    const logo=
    {
      'FirmLogo':''
    }
    return this.service.UploadImage(logo,this.firmDetails[0].paN_No).subscribe(res=>
      {
        console.log('res',res);
        // alert("Uploaded Successfully !!")
        Swal.fire({
          title: 'Removed Successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(()=>{    this.def.ngOnInit();
        });
this.choose=true;
      }
    )
  }
}
