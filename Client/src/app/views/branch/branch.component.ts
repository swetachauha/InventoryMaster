import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchTableComponent } from '../branch-table/branch-table.component';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {


   @ViewChild(BranchTableComponent) child:BranchTableComponent | undefined;
  

  branch:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
  }
  saveBranch()
  {
    return this.service.saveBranch(this.branch).subscribe(res=>{
      console.log("group",res);
      // this.child?.AllBranch();
      Swal.fire({
      title: 'Added Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(()=>{    window.location.reload();
    });

      this.showFlashError=false;
      this.branch='';

    },(err:any)=>{
      console.log("error in component", err.error) ;
      if(err.status==400)
      {
        if(err.error=="Branch already Exists")
        {
          this.errorMessage="Branch already Exists .";
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
      else if(err.status==0)
      {
      this.errorMessage=" Please check Connection..";
        this.showFlashError=true;
        this.showFlash=false;
      }
     
    })
  }

  getbranchDataToInput(event:any)

  {
    console.log("branchinput",this.branch)
  
    this.child?.dataintext;
    console.log("child",this.child?.dataintext.branchName);
    this.branch.BranchName=(<HTMLInputElement>document.getElementById('branchName')).value=this.child?.dataintext.branchName;
   this.branch.FirmName=(<HTMLInputElement>document.getElementById('firmName')).value=this.child?.dataintext.firmName;
   this.branch.Address=(<HTMLInputElement>document.getElementById('address')).value=this.child?.dataintext.address;
   this.branch.City=(<HTMLInputElement>document.getElementById('city')).value=this.child?.dataintext.city;
   this.branch.BranchId=(<HTMLInputElement>document.getElementById('branchId')).value=this.child?.dataintext.branchId;

   this.buttonAdd=false;
   this.buttonEdit=true;
   console.log("branchinput",this.branch)
  
    }

    editBranch(branch:any)
    {
      console.log("branchid",this.branch.BranchId);
      if(this.branch.BranchName=='' ||this.branch.FirmName==''|| this.branch.Address=='' || this.branch.City==''  || this.branch.BranchId=='')
      {
        this.errorMessage="Please fill all the fields";
        this.showFlashError=true;
        this.showFlash=false;
        return false;
      }
      else{
        return this.service.EditBranch(this.branch.BranchId,this.branch).subscribe(res=>
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
            if(err.error=="branch already Exists")
            {
              this.errorMessage="branch already Exists .";
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
