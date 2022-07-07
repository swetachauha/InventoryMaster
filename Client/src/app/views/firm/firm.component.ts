import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss']
})
export class FirmComponent implements OnInit {

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
  editContent:boolean | undefined=false;
  clickedEdit:boolean | undefined=false;

  constructor(private service:InventoryServiceService) { this.files = [];}

  ngOnInit(): void {
    this.getAllBanks();
    this.getFirm();
    

  }
  onFileSelected(event:any)
  {
    console.log("firm",event);
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
      this.image=reader.result;
    }
  }
  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  onUpload() {
    const formData = new FormData();
    for (var file of this.files) {
        formData.append(file, file.name);
    }
    this.service.UploadImage( formData).subscribe(x => console.log("x",x));
  }
  saveFirm()
  {
    
    return this.service.Upload(this.firm).subscribe(res=>{
      console.log("fiem",res);
      console.log("fiem",this.firm.GST_No);
      this.getFirm();
    },err=>{
      if(err.status==400)
    {
      if(err.error=="Item already Exists !!")
      {
        // this.errorMessage="Item already Exists .";
        // this.showFlashError=true;
        // this.showFlash=false;
      }
    }
    else{

    }
    })
  }

getFirm()
{
  return this.service.getFirm().subscribe(res=>{
    console.log("firmgst",res);
   
    this.firmDetails=res;
    if( this.firmDetails.length!=0)
    {
      this.saved=true;
      this.gst=this.firmDetails[0].gsT_No;
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

    console.log("edit",(<HTMLInputElement>document.getElementById('fname')));
    this.firm.FirmName=(<HTMLInputElement>document.getElementById('fname')).value=this.firmDetails[0].firmName;

  }
  updated()
  {

  }
}
