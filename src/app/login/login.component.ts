import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
  constructor(public rtr:Router){}

  LoginForm = new FormGroup({
    lemail:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-][a-zA-Z0-9.-]+$")]),
    lpass:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    lcondition:new FormControl(Validators.required)
  })
    get lemail(){
      return this.LoginForm.get('lemail')
}

get lpass (){
  return this.LoginForm.get('lpass')
}
get lcondition (){
  return this.LoginForm.get('lcondition')
}

llogin(){
  console.log(this.LoginForm.value);
  localStorage.setItem("lemail",JSON.stringify(this.LoginForm.value.lemail))
  localStorage.setItem("lpass",JSON.stringify(this.LoginForm.value.lpass))
  this.rtr.navigate(["Registration"])
  
}
  

  ngOnInit(): void {
  }

}
