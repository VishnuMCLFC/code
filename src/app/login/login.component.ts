import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //sin="Your Banking Partner";
  //accno="Enter your account number";
  // user:any={
  //   1000:{acno:1000,uname:"Akhil",password:"userone",balance:3000},
  //   1001:{acno:1001,uname:"Abhi",password:"usertwo",balance:1000},
  //   1002:{acno:1002,uname:"Anu",password:"userthree",balance:5000},
    
  // }
acno="";
pswd="";
  
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }




signin()
{

var acno=this.acno;
console.log(acno);

var pswd=this.pswd;
var result=this.ds.signin(acno,pswd);
if(result)
{
  this.router.navigateByUrl("dashboard");
}else{
  this.router.navigateByUrl("");
}
}
}
