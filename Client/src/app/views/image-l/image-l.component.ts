import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
@Component({
  selector: 'app-image-l',
  templateUrl: './image-l.component.html',
  styleUrls: ['./image-l.component.scss']
})
export class ImageLComponent implements OnInit {
  @Input() img = '';
  firmDetails:any=[];
  constructor(private service:InventoryServiceService) { }

  ngOnInit(): void {
    this.getLogo();
  }
  getLogo()
{    console.log("firmgstioop");

  return this.service.getFirm().subscribe(res=>{
    
    console.log("firmgstchild",res);
   
    this.firmDetails=res; 
    
     
  })
}
}
