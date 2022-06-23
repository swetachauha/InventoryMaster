import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  item:any={};
  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;


  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.displayGroup();
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


 saveItem()
 {
  return this.service.saveItem(this.item).subscribe(res=>{
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
    this.item='';
    // this.displayGroup();
    


  },(err:any)=>{
    console.log("error in component", err) ;
    if(err.status==400)
    {
      if(err.error=="Item already Exists !!")
      {
        this.errorMessage="Item already Exists .";
        this.showFlashError=true;
        this.showFlash=false;
      }
      else if(err.err='Only positive number allowed')
      {
        this.errorMessage="Only positive number allowed";
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
