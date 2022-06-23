import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BankTableComponent } from '../bank-table/bank-table.component';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  // @ViewChild('name') nameElement: ElementRef;


  @ViewChild(BankTableComponent) child:BankTableComponent | undefined;

  bank:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;

  constructor(private service:InventoryServiceService , private router:Router) 
  { 
  }

  ngOnInit(): void {
//   this.service.refreshNeeded$.subscribe(()=>{      this.child?.AllBank();
// });
  }
  saveBank()
  { 

    return this.service.saveBank(this.bank).subscribe(res=>
      {
      console.log("group",res);
      
     Swal.fire({
      title: 'Added Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(()=>{    window.location.reload();
    });

 
    
    
      this.showFlashError=false;
      this.bank='';

    },(err:any)=>{
      console.log("error in component", err) ;
      if(err.status==400)
      {
        if(err.error=="Bank already Exists")
        {
          this.errorMessage="Bank already Exists .";
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

  editBank(event: any)
{
  if(this.bank.BankName=='' ||this.bank.IFSC_Code==''|| this.bank.Address=='' || this.bank.City=='' )
      {
        this.errorMessage="Please fill all the fields";
        this.showFlashError=true;
        this.showFlash=false;
        return false;
      }
      else{
        return this.service.EditBank(this.bank.IFSC_Code,this.bank).subscribe(res=>
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
            if(err.error=="Bank already Exists")
            {
              this.errorMessage="Bank already Exists .";
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
  getBankDataToInput(event:any)

{
  console.log("bankinput",this.bank)

  this.child?.dataintext;
  console.log("child",this.child?.dataintext.bankName);
  this.bank.BankName=(<HTMLInputElement>document.getElementById('BankName')).value=this.child?.dataintext.bankName;
 this.bank.IFSC_Code=(<HTMLInputElement>document.getElementById('IFSC_Code')).value=this.child?.dataintext.ifsC_Code;
 this.bank.Address=(<HTMLInputElement>document.getElementById('Address')).value=this.child?.dataintext.address;
 this.bank.City=(<HTMLInputElement>document.getElementById('City')).value=this.child?.dataintext.city;
 this.buttonAdd=false;
 this.buttonEdit=true;
 console.log("bankinput",this.bank.IFSC_Code)

  }
}
