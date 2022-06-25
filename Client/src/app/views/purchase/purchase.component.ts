import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ItemArr } from 'src/app/_models/ItemArr';
// import { cibToshiba } from '@coreui/icons';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  
  itemArray : any[]=[];

  purchase:any={};
  purchaseTran:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;
  getVendor:any=[];
  getVendorList :any=[];
  getItem:any=[];
  item:any=[];
  getUnitList:any=[];
  ItemComponentArr=[];
  
  // ItemArr=new this.ItemArr();

  constructor(private service:InventoryServiceService , private router:Router ) 
  { 
  }

  ngOnInit(): void {
    this.getVendors();
    this.getItems();
    this.addvalue();
    this.getUnit();
    // this.FormGroup=this._fb.group({
    //   itemRows:this._fb.array([this.initItemRow()]),
    // });
  }
  addvalue()
  {
    this.itemArray.push({value:""});
  }
 removevalue(i:any)
 {
  this.itemArray.splice(i,1);
 }
 
  getVendors()
  {
    return this.service.allParty().subscribe(res=>{
      console.log("vendors",res);
      this.getVendorList=res;
    }

    )
  }
  getSelectedVendor(event:any)
  {
    var arrOfStr = event.target.value.split("-", 2);

    return this.service.getPartyByPhoneAndName(arrOfStr[0],arrOfStr[1]).subscribe(res=>{
      console.log("vendors",res);
      this.getVendor=res;
      this.getVendorDataToInput();
    }

    )
  }
  savePurchase()
  { 
    const purchaseDTO={
      Vendor_Name:this.purchase.Vendor_Name,
      Address:this.purchase.Address,
      City:this.purchase.City,
      Phone_No:this.purchase.Phone_No,
      purchaseDate:this.purchase.purchaseDate,
      Purchase_Order_No:this.purchase.Purchase_Order_No,
      Purchase_Order_Date:this.purchase.Purchase_Order_Date,
      Purchase_Invoice_NO:this.purchase.Purchase_Invoice_NO,
      Purchase_Invoice_Date:this.purchase.Purchase_Invoice_Date,


      purchaseTransaction:this.itemArray
    };
    console.log("group",purchaseDTO);

    return this.service.savePurchase(purchaseDTO).subscribe(res=>
      {
      console.log("group",res);
      
     Swal.fire({
      title: 'Added Successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(()=>{    window.location.reload();
    });

 
    
    
      this.showFlashError=false;
      this.purchase='';

    },(err:any)=>{
      console.log("error in component", err) ;
      if(err.status==400)
      {
        if(err.error=="Add atleast one item to purchase.")
        {
          this.errorMessage="Add atleast one item to purchase.";
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

  getItems()
  {
    return this.service.AllItem().subscribe(res=>{
      console.log("item",res);
      this.getItem=res;
      if(this.getItem.length==0)
      {
        this.getItem.itemName="No Items in List"
      }

    console.log("items",this.getItem)
    })
  }


  getItemDetails(event:any , id:any)
  {
    console.log("event",event.target.value);
    console.log("id",id);

    return this.service.getItemByItemName(event.target.value).subscribe(res=>{
      console.log("getitem",res);
      this.item=res;
      console.log("getitemj",this.purchase.HSN_No);

      this.purchase.HSN_No=(<HTMLInputElement>document.getElementById('HSN_No'+id)).value=this.item?.hsN_No;
      this.purchase.Price=(<HTMLInputElement>document.getElementById('Price'+id)).value=this.item?.purchase_Rate;
      console.log("getitemhbv",this.purchase.HSN_No);

    }
    )

  }


getUnit()
{
  return this.service.AllUnits().subscribe(
    res=>{
      console.log("unit",res);
      this.getUnitList=res;
    }
  )
}


  getVendorDataToInput()
  {
    console.log("address",this.getVendor.city);
    this.purchase.Address=(<HTMLLabelElement>document.getElementById('Address')).textContent=this.getVendor.party_Address;
    this.purchase.City=(<HTMLLabelElement>document.getElementById('City')).textContent=this.getVendor.city;
    this.purchase.Phone_No=(<HTMLLabelElement>document.getElementById('phone')).textContent=this.getVendor.phone_No;



  }

}
