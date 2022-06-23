import { Component, OnInit } from '@angular/core';
import { AuthenticteService } from 'src/app/services/authenticte.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  model:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;

  constructor( private service:AuthenticteService , private router :Router) { }

  ngOnInit(): void {
  }

  login()
  {
    if(!(this.service.signInEmpty(this.model)))
    {
      this.errorMessage="Please enter all the fields!!";
     this.showFlashError=true;
     return false;
    }
    else{
      return this.service.login(this.model).subscribe(res=>{
        console.log("res",res)
        if(typeof localStorage !=='undefined')
        {
          localStorage.setItem("token",res.token);
          localStorage.setItem("username",res.userName);
        }
        this.router.navigate(['/dashboard']);
  
      }, err=>{
         if(err.status==400)
        {
          this.errorMessage="Please fill all the fields !!";
          this.showFlashError=true;
  
        }
        else if(err.status==422 || 500)
        {
          this.errorMessage=" Invalid Email or Password";
          this.showFlashError=true;

        }
     
      }
);
    }
   
  }

}
