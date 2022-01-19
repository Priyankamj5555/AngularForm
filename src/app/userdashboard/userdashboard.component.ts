import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(public rtr:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.rtr.navigate(["Login"]);
  }

}
