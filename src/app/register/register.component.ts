import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public rtr:Router){}

  loginForm = new FormGroup({
    remail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-][a-zA-Z0-9.-]+$")]),
    rpass:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })
    get remail(){
      return this.loginForm.get('remail')
}

get rpass (){
  return this.loginForm.get('rpass')
}
get rcondition (){
  return this.loginForm.get('rcondition')
}

rlogin(){
  console.log(this.loginForm.value);
  localStorage.setItem("remail",JSON.stringify(this.loginForm.value.remail))
  localStorage.setItem("rpass",JSON.stringify(this.loginForm.value.rpass))
  this.rtr.navigate(["UserDashboard"])
}
 

  ngOnInit(): void {
  } 
  
  

}
