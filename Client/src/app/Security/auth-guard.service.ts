import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  isLoggedIn()
  {
    return !!localStorage.getItem('token');
    
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
