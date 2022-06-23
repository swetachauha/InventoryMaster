import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { UnitTableComponent } from '../unit-table/unit-table.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  @ViewChild(UnitTableComponent) child:UnitTableComponent | undefined;
  unit:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;


  constructor(private service:InventoryServiceService, private router :Router) { }

  ngOnInit(): void {
  }
 

  saveUnit()
  {
    return this.service.saveUnit(this.unit).subscribe(res=>{
      console.log("unit",res);
      this.child?.AllUnits();
      this.showFlash=true;
      this.showFlashError=false;
      this.unit='';
      
      // this.router.navigate([UnitComponent]);

    },err=>{
      console.log("error in component", err) ;
      if(err.status==400)
      {
        console.log("error",err.error)
        if(err.error=="Unit already taken")
        {
          this.errorMessage="Unit already Exists .";
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
      else if(err.status==422 || 500)
      {
        this.errorMessage=" Backend Issue..";
        this.showFlashError=true;
        this.showFlash=false;

      }
    })
  }

  getUnitDataToInput(event:any)

  {
    console.log("unitinput",this.unit)
  
    this.child?.dataintext;
    console.log("child",this.child?.dataintext.unit);
    this.unit.Unit=(<HTMLInputElement>document.getElementById('unit')).value=this.child?.dataintext.unit;
   this.unit.acronymn=(<HTMLInputElement>document.getElementById('acronymn')).value=this.child?.dataintext.acronymn;
   

   this.buttonAdd=false;
   this.buttonEdit=true;
   console.log("unitinput",this.unit)
  
    }

    editUnit(unit:any)
    {
      console.log("unittype",this.unit.Unit);
      if(this.unit.Unit=='' ||this.unit.Acronymn=='')
      {
        this.errorMessage="Please fill all the fields";
        this.showFlashError=true;
        this.showFlash=false;
        return false;
      }
      else{
        return this.service.EditUnit(this.unit.Unit,this.unit).subscribe(res=>
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
            if(err.error=="unit already Exists")
            {
              this.errorMessage="unit already Exists .";
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
            this.errorMessage="Please add this unit before edit !!";
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
