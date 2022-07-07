import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {

  Transport:any={};
  getTax:any=[];
  Tax:any=[];

  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
  }
save()
{
  return this.service.saveTransport(this.Transport).subscribe(res=>{
    console.log("res",res);
    Swal.fire({
      title: 'Added Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(()=>{    window.location.reload();
    });
    this.showFlashError=false;
  },err=>{
    console.log("error in component", err.status) ;
    if(err.status==400)
    {
      console.log("error",err.error.errors)
      if(err.error=="Tax already Exists")
      {
        this.errorMessage="UTax already Exists .";
        this.showFlashError=true;
        this.showFlash=false;
      }
      else if(err.error.errors=="Only positive number allowed")
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
}
