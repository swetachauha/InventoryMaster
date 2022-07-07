import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  itemArray : any[]=[];
  firm:any=[];
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
  firmDetails:any={};
  gst:boolean | undefined;
  maxDate:any;
  dataFetched:any=false;
  transportList:any=[];


  constructor(private service:InventoryServiceService , private router:Router) { }

  ngOnInit(): void {
    this.futureDateDisable();
    this.getFirm();
    this.getFirmGST();
    this.getVendors();
    this.getItems();
    this.addvalue();
    this.getUnit();
    this.getTransport();

    console.log("boolean",this.gst);
  }

  scrollTop()
  {
   window.scroll(0,0);
  }

  futureDateDisable()
  {
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any=date.getMonth()+1;
    var year:any=date.getFullYear();

    if(todayDate<10)
    {
      todayDate='0'+todayDate;
    }
    if(month<10)
    {
      month='0'+month;
    }
    // this.maxDate=year+"-"+month+"-"+todayDate;
    this.maxDate=todayDate+"/"+month+"/"+year;

    console.log("today",this.maxDate);
  }
  getTransport()
  {
    return this.service.AllTransport().subscribe(res=>{
      console.log("transport",res);
      this.transportList=res;
    })
  }

  getFirm()
  {
    this.service.getFirm().subscribe(res=>{
      console.log("isfirm",res);
      this.firm=res;
    })
  }
  addvalue()
  {
   
    this.itemArray.push({
      value:"",
      HSN_No:this.purchaseTran.HSN_No,
      Price:this.purchaseTran.Price,
      IGST:this.purchaseTran.IGST,
      CGST:this.purchaseTran.CGST,
  });
  console.log("itemarray",this.itemArray.length);

  }
 removevalue(i:any)
 {

  if (this.itemArray.length==1)
    {
      alert("Atleast one item should be there in purchase .")
    }
    else{
      this.itemArray.splice(i,1);

    }
    console.log("itemarray",this.itemArray.length);

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
      console.log("vendorsselected",res);

      this.getVendor=res;
      if (this.getVendor!=null)
      {
        this.dataFetched=true;
        this.getVendorDataToInput();
      }

     

    }

    )
  }
  getVendorDataToInput()
{
  console.log("address",this.getVendor.city);

  // console.log("label",(<HTMLLabelElement>document.getElementById('phone')).textContent);

  this.purchase.Address=this.getVendor.party_Address;
  this.purchase.City=this.getVendor.city;
  this.purchase.Phone_No=this.getVendor.phone_No;
  this.purchase.GST_No=this.getVendor.gsT_No;
  // console.log("label",(<HTMLLabelElement>document.getElementById('phone')).textContent);

  console.log("address",this.purchase.GST_No);

}
  savePurchase()
  { 
    if(this.firm.length!=0)
    {
      const purchaseDTO={
        Customer_Name:this.purchase.Customer_Name,
        Address:this.purchase.Address,
        City:this.purchase.City,
        Phone_No:this.purchase.Phone_No,
        GST_No:this.purchase.GST_No,
        Purchase_Order_No:this.purchase.Purchase_Order_No,
        Purchase_Order_Date:this.purchase.Purchase_Order_Date,
        Purchase_Invoice_NO:this.purchase.Purchase_Invoice_NO,
        Purchase_Invoice_Date:this.purchase.Purchase_Invoice_Date,
        Builty_NO:this.purchase.Builty_NO,
        Document_Through:this.purchase.Document_Through,
        Transport:this.purchase.Transport,
  
  
        salesTransaction:this.itemArray
      };
      console.log("group",this,this.purchase.GST_No);

      console.log("group",purchaseDTO);
      
      return this.service.saveSale(purchaseDTO).subscribe(res=>
        {
        console.log("group",res);
        const invoice=res;
        
       Swal.fire({
        text: 'Sale is registered with'+' ' +'INVOICE NO'+' '+ invoice,
        title:"",
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(()=>{    window.location.reload();
      });

      this.showFlashError=false;
      this.purchase='';

    },
    (err:any)=>{
      console.log("error in component", err.error.errors) ;
      if(err.status==400)
      {
        if(err.error=="Add atleast one item to purchase.")
        {
          this.errorMessage="Add atleast one item to purchase.";
          this.showFlashError=true;
          this.showFlash=false;
          this.scrollTop();
        }
        
        else if(err.error=="Price can not be negative")
        {
          this.errorMessage="Price can not be negative";
          this.showFlashError=true;
          this.showFlash=false;
          this.scrollTop();

        }
        else if(err.error=="Tax can not be negative and more than 100%")
        {
          this.errorMessage="Tax can not be negative and more than 100%";
          this.showFlashError=true;
          this.showFlash=false;
          this.scrollTop();

        }
        else if(err.error=="Amount should be positive quantity")
        {
          this.errorMessage="Amount should be positive quantity";
          this.showFlashError=true;
          this.showFlash=false;
          this.scrollTop();

        }
        else
        {
          this.errorMessage="Please fill all the fields .";
          this.showFlashError=true;
          this.showFlash=false;
          this.scrollTop();

  
        }
       
      }
      else if(err.status==415 )
      {
        this.errorMessage=" Please refresh once..";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
      else if(err.status==422 || 500)
      {
        this.errorMessage=" Backend Issue..";
        this.showFlashError=true;
        this.showFlash=false;
        this.scrollTop();

      }
     
    })
  
    }
    else{
      this.gst=true;
      alert("Please enter your Firm details.");
      return false;
    }

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





getUnit()
{
  return this.service.AllUnits().subscribe(
    res=>{
      console.log("unit",res);
      this.getUnitList=res;
    }
  )
}


 

 
  getFirmGST()
{
  return this.service.getFirm().subscribe(res=>{
    console.log("firmgst",res);
   
    this.firmDetails=res;
    const gstStart=this.firmDetails[0].gsT_No.slice(0,2);
    if (gstStart==='09')
    {
      console.log("09");
      this.gst=false;

    }
    else
    {
      console.log("not 09");
       this.gst=true;

    }
    

  })
}


getItemDetails(event:any , id:any)
{
  console.log("event",event.target.value);
  console.log("id",id);

  return this.service.getItemByItemName(event.target.value).subscribe(res=>{
    console.log("getitem",res);
    this.item=res;
    
    console.log("price",(this.purchase.Price));

    // this.purchaseTran.HSN_No=(<HTMLInputElement>document.getElementById('HSN_No'+id)).value=this.item?.hsN_No;
    this.purchaseTran.Price=(<HTMLInputElement>document.getElementById('Price'+id)).value=this.item?.purchase_Rate;
    console.log("price",(this.purchase.Price));

   if(this.gst==false)
   {    
    console.log("gstboolean",this.gst);

     this.purchaseTran.CGST=(<HTMLInputElement>document.getElementById('CGST'+id)).value=this.item?.cgst;
     this.purchaseTran.SGST=(<HTMLInputElement>document.getElementById('SGST'+id)).value=this.item?.sgst;
    //  this.purchaseTran.IGST=0;
   }
   else  if(this.gst==true){
    console.log("gstboolean",this.gst);

    this.purchaseTran.IGST=(<HTMLInputElement>document.getElementById('IGST'+id)).value=this.item?.igst;
   }
   
  //  this.purchaseTran.Total_Amount=(<HTMLInputElement>document.getElementById('Total_Amount'+id)).value=amount;
console.log("hsn", this.purchaseTran.SGST);
console.log("hsn", this.purchaseTran.CGST);
console.log("hsn", this.purchaseTran.IGST);

for(var i=0;i<this.itemArray.length;i++)
{
  this.itemArray[i].Price=this.item?.purchase_Rate;
  if(this.gst==false)
  {
    this.itemArray[i].CGST=this.item?.cgst;
    this.itemArray[i].SGST=this.item?.sgst;
  }
  else{
    this.itemArray[i].IGST=this.item?.igst;

  }
 

}
  }
  )

}

calculate(i:any)
{    
  console.log("Price", this.purchaseTran.Price );
  console.log("i",i.Price);
  console.log("i",i.Quantity);

  if((!this.purchaseTran.Price || !i.Quantity ) )
  {
    console.log("Price", this.purchaseTran.Price )
    console.log("quantity", i.Quantity)
    i.Total_Amount=0;
    
  }
  else if(i.Price==undefined)
  {
    i.Total_Amount=this.purchaseTran.Price*i.Quantity;
    console.log("2",  i.Total_Amount);
  }
  else 
  {
    i.Total_Amount=i.Price*i.Quantity;
    console.log("2",  i.Total_Amount);

  }
  
  if(!i.Discount)
    {
      i.Disc_Price=i.Total_Amount;
    }
    else
    {
      i.DiscountPrice=(i.Discount*i.Total_Amount)/100
      i.Disc_Price=i.Disc_Price-i.DiscountPrice;
      console.log("dis",i.Disc_Price)

    }
    console.log("CGST",this.purchaseTran.CGST);
    console.log("CGST",i.Disc_Price);

    i.CGSTLabel=(this.purchaseTran.CGST*i.Disc_Price)/100;
    i.SGSTLabel=(this.purchaseTran.SGST*i.Disc_Price)/100;
    i.Net_Amount=i.Disc_Price-(((this.purchaseTran.CGST*i.Disc_Price)/100)+((this.purchaseTran.SGST*i.Disc_Price)/100));
    console.log("CGST",i.Net_Amount);

}
calculateDiscount(i:any)
{
  if(!i.Discount)
    {
      i.Disc_Price=i.Total_Amount;
    }
    else
    {
      i.DiscountPrice=(i.Discount*i.Total_Amount)/100
      i.Disc_Price=i.Disc_Price-i.DiscountPrice;
      console.log("dis",i.Disc_Price)

    }
}

}
