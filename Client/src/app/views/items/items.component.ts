import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';
import { ItemTableComponent } from '../item-table/item-table.component';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @ViewChild(ItemTableComponent) child:ItemTableComponent | undefined;

  
  item:any={};
  getTax:any=[];
  Tax:any=[];

  getGroups:any=[];
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  unitList:any=[];
  buttonAdd:boolean=true;
  buttonEdit:boolean=false;
  edit:boolean=false;
  itemByItemName:any={};

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.displayGroup();
    this.displatTax();
    this.displayUnit();
    this.item.IGST='';

  }
  displayUnit()
  {
    return this.service.AllUnits().subscribe(res=>{
      console.log("unit",res);

      this.unitList=res;
    })
  }
 displatTax()
 {
  return this.service.AllTax().subscribe(res=>{
    console.log("res",res);
    this.Tax=res;
    for(var i=0 ; i<this.Tax.length ; i++)
    {    console.log("2",this.Tax[i].taxType.slice(0,4));

       console.log("3",this.Tax[i]);

      if(this.Tax[i].taxType.slice(0,4)==='IGST')
      {
        console.log("4",this.Tax[i]);

        this.getTax.push(this.Tax[i]);
      }
    }
  })
 }
  displayGroup()
 {
   return this.service.AllGroup().subscribe(res=>{
     console.log("res",res);
     this.getGroups=res;
     for(var i=0 ;i<this.getGroups.length ; i++)
     {
       console.log("for",this.getGroups.length);
      //  if(this.getGroups[i].groupCategory && this.getGroups[i].groupName=="Primary" )
      //  {
      //   console.log("Primary");

      //  }
      
      // for(var j=i+1 ; j<this.getGroups.length ;j++)
      // {
      //   console.log("groupCategory",this.getGroups[i].groupCategory);

      //   console.log("groupName",this.getGroups[j].groupName);

      //   if(this.getGroups[j].groupName==this.getGroups[i].groupCategory)
      //   {
      //     console.log("hello");
      //     this.getGroups[j].groupName=this.getGroups[i].groupName  + "/" +this.getGroups[i].groupCategory

      //   }
      //   else{
      //     console.log(" nithello");
      //   }
      // }
       
   
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
    }).then(()=>{   
      this.buttonAdd=true;
      this.buttonEdit=false;
      this.item={};
      this.child?.AllItems();
    });
    this.showFlash=true;
    this.showFlashError=false;
    this.item='';
    // this.displayGroup();
    


  },(err:any)=>{
    console.log("error in component", err) ;

    if(err.status==400)
    {
      // if(!this.item.groupName)
      // {
      //   this.errorMessage="Please select Group";
      //   this.showFlashError=true;
      //   this.showFlash=false;
      // }
      // else if(!this.item.igst)
      // {
      //   this.errorMessage="Please select Tax";
      //   this.showFlashError=true;
      //   this.showFlash=false;
      // }
      if(err.error=="Item already Exists !!")
      {
        this.errorMessage="Item already Exists .";
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
 fillCgst(event:any)
 {
   console.log("5",event.target.value);
   this.item.CGST=event.target.value/2;
   this.item.SGST=event.target.value/2;

  //  (<HTMLInputElement>document.getElementById('CGST')).value;
 }

 getGroupDataToInput(event:any)

   {
    
    
   this.edit=true;
      console.log("html",<HTMLInputElement>document.getElementById('cgst'));
   this.item.itemName=(<HTMLInputElement>document.getElementById('itemName')).value=this.child?.dataintext.itemName;
   this.item.groupName=(<HTMLSelectElement>document.getElementById('groupSelect')).selectedIndex=this.child?.dataintext.groupName;
    this.item.HSN_No=(<HTMLSelectElement>document.getElementById('HSN_No')).value=this.child?.dataintext.hsN_No;
    this.item.Bar_Code=(<HTMLSelectElement>document.getElementById('Bar_Code')).value=this.child?.dataintext.bar_Code;
    this.item.Cess=(<HTMLSelectElement>document.getElementById('Cess')).value=this.child?.dataintext.cess;
    this.item.Purchase_Rate=(<HTMLSelectElement>document.getElementById('Purchase_Rate')).value=this.child?.dataintext.purchase_Rate;
    this.item.margin=(<HTMLSelectElement>document.getElementById('margin')).value=this.child?.dataintext.margin;
    this.item.Sales_Rate=(<HTMLSelectElement>document.getElementById('Purchase_Rate')).value=this.child?.dataintext.sales_Rate;
    this.item.Unit=(<HTMLSelectElement>document.getElementById('unit')).selectedIndex=this.child?.dataintext.unit;

    this.item.IGST=(<HTMLSelectElement>document.getElementById('igst')).selectedIndex=this.child?.dataintext.igst;
    this.item.CGST=(<HTMLInputElement>document.getElementById('CGST')).value=this.child?.dataintext.cgst;
    this.item.SGST=(<HTMLInputElement>document.getElementById('SGST')).value=this.child?.dataintext.sgst;

    this.buttonAdd=false;
    this.buttonEdit=true;
    // console.log("groupinput",this.group.IFSC_Code)

   
   
     }

     EditItem(event:any)
     {
  
     console.log("edit",this.child?.groupCatrTarget);
     this.service.getItemByItemName(this.child?.groupCatrTarget).subscribe(res=>{
      console.log("targ",res);
      this.itemByItemName=res;
      console.log("targ",this.itemByItemName.itemId);
      console.log("unit",this.item.Unit);

      if( !this.item.itemName
         || (!this.item.groupName || this.item.groupName=='Select') 
         || !this.item.HSN_No 
         || !this.item.Bar_Code 
         || !this.item.IGST 
        || !this.item.CGST
        || !this.item.SGST
          || !this.item.Cess 
         || !this.item.Purchase_Rate 
         || !this.item.margin 
         || !this.item.Sales_Rate 
         || (!this.item.Unit || this.item.Unit=='Select') 
         )
       {
         this.errorMessage="Please fill all the fields";
         this.showFlashError=true;
         this.showFlash=false;
         return false;
       }
       else{
    
         return this.service.EditItem(this.itemByItemName.itemId,this.item).subscribe(res=>
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
            this.item={};
            this.child?.AllItems();
           });
         },(err:any)=>{
           console.log("error in component", err) ;
           if(err.status==400)
           {
             if(err.error=="group already Exists")
             {
               this.errorMessage="Item already Exists .";
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
             this.errorMessage=" Group category not found !!";
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
     })
    
     }
}
