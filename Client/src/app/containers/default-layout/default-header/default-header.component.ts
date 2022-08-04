import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5);
   public firmName:any;
  firmDetails:any=[];

  constructor(private router :Router  , private classToggler: ClassToggleService , private service:InventoryServiceService) {
    super();
    this.getLogo();
  }
 
  getLogo()
  {
    return this.service.getFirm().subscribe(res=>{
      
      console.log("firmgst",res);
     
      this.firmDetails=res; 
      this.firmName=this.firmDetails[0].firmName;
       
    })
  }

  logout(){
    // localStorage.removeItem('token');
    //   localStorage.removeItem('username');
    localStorage.clear();
      this.router.navigate(['/']);
  
  }
}
