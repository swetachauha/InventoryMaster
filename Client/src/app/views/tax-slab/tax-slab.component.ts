import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { TaxTableComponent } from '../tax-table/tax-table.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tax-slab',
  templateUrl: './tax-slab.component.html',
  styleUrls: ['./tax-slab.component.scss']
})
export class TaxSlabComponent implements OnInit {

  @ViewChild(TaxTableComponent) child:TaxTableComponent | undefined;
  

  tax:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
  }
  saveTax()
  {
    return this.service.saveTax(this.tax).subscribe(res=>{
      console.log("tax",res);
      Swal.fire({
        title: 'Added Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(()=>{    window.location.reload();
      });
      // this.child?.AllTax();
      // this.showFlash=true;
      this.showFlashError=false;
      this.tax='';

    },err=>{
      console.log("error in component", err) ;
      if(err.status==400)
      {
        console.log("error",err.error.errors.taxPerc[0])
        if(err.error=="Tax already Exists")
        {
          this.errorMessage="UTax already Exists .";
          this.showFlashError=true;
          this.showFlash=false;
        }
        else if(err.error.errors.taxPerc[0]=="Only positive number allowed")
        {
          this.errorMessage="Only positive number allowed.";
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
  getTaxDataToInput(event:any)

  {
    console.log("taxinput",this.tax)
  
    this.child?.dataintext;
    console.log("child",this.child?.dataintext.taxName);
    this.tax.taxType=(<HTMLInputElement>document.getElementById('taxType')).value=this.child?.dataintext.taxType;
   this.tax.taxPerc=(<HTMLInputElement>document.getElementById('taxPerc')).value=this.child?.dataintext.taxPerc;
   

   this.buttonAdd=false;
   this.buttonEdit=true;
   console.log("taxinput",this.tax)
  
    }

    editTax(tax:any)
    {
      console.log("taxtype",this.tax.taxType);
      if(this.tax.taxType=='' ||this.tax.taxPerc=='')
      {
        this.errorMessage="Please fill all the fields";
        this.showFlashError=true;
        this.showFlash=false;
        return false;
      }
      else{
        return this.service.EditTax(this.tax.taxType,this.tax).subscribe(res=>
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
            if(err.error=="tax already Exists")
            {
              this.errorMessage="tax already Exists .";
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
            this.errorMessage="Please add this Tax before edit !!";
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
