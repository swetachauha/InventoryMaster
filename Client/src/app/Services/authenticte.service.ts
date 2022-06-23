import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticteService {

  constructor(private http:HttpClient) { }

  login(user:any):Observable<any>{
    console.log("validator",user);
    const res=this.http.post('https://localhost:5001/account/login',user);
    console.log("res",res);
    return res;
  }
  signInEmpty(user:any){
    if(user.username=="" || user.password=="")
    {
      return false;
    }
    else{
      return true;
    }
  }
}
