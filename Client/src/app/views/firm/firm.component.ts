import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss']
})
export class FirmComponent implements OnInit {

  selectedFile!: File[];
  firm:any={};
  image:any;
  file:any; 
  banks:any=[];

  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.getAllBanks();
  }
  onFileSelected(event:any)
  {
    console.log("firm",event);
    // this.selectedFile = <File> event.target.files[0]
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
      this.image=reader.result;
    }
  }

  upload()
  {
    alert("submit");
    this.service.Upload(this.firm).subscribe(res=>{
      console.log("fiem",res)
    })
  }

  getAllBanks()
  {
    this.service.AllBank().subscribe(res=>{
      console.log("banks",res);
      this.banks=res;
    })
  }
  // UploadImage()
  // {
  //   const fd= new FormData();
  //   for(var i=0 ; i<this.selectedFile.length;i++)
  //   {
  //     fd.append("file",this.selectedFile[i],this.firm.firmName)

  //   }
  //  this.service.UploadImage(fd).subscribe(res=>{
  //     alert("uploaded")
  //  })
  // }

  // UploadImage(firmName:any , image:any)
  // {
  //  this.image=image;
  // }

  onFileChanged(event:any)
  {
     // Get the file selected.
   const selectedFile = event.target.files[0];

   // To display the selected image before deciding to upload it.
   let reader = new FileReader();

   // Gets a 'base64' representation of an image.
   reader.readAsDataURL(event.target.files[0]);

   reader.onload = (event2) => {
     // Sets the html <img> tag to the image.
     this.image = reader.result;
   };

  // Call the service to use the web api to add the image to the database.
  // this.imageService.addImage(selectedFile).subscribe(
  //   event => {
  //     console.log(event);
  //   });
  }
}
