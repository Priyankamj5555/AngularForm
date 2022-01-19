import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(){}

  isLoggedIn(){
    const loginemail= localStorage.getItem("lemail")
    const loginpassword= localStorage.getItem("lpass")
    const regemail= localStorage.getItem("remail")
    const regpassword= localStorage.getItem("rpass")

    if(loginemail===null){
      window.alert("kindly login and register to view this page");
      return false
    }
    else if(loginemail===regemail && loginpassword===regpassword){
      window.alert("Your Login!, success");
      return true
      
    } else {
      window.alert("login failed, please verify your email and password in register and login")
      return false
    }

  }

  
}
