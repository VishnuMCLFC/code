import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //sin="Your Banking Partner";
  //accno="Enter your account number";
  user:any={
    1000:{acno:1000,uname:"Akhil",password:"userone",balance:3000},
    1001:{acno:1001,uname:"Abhi",password:"usertwo",balance:1000},
    1002:{acno:1002,uname:"Anu",password:"userthree",balance:5000},
    
  }

  acno="";
  pswd=""
  constructor() { }

  ngOnInit(): void {
  }


acChange(event:any)
{
this.acno=event.target.value;
}
pwdChange(event:any)
{
this.pswd=event.target.value;
}
signin()
{
//alert("Login clicked");
var acno=this.acno;
var pswd=this.pswd;
let acDetails=this.user;
if(acno in acDetails)
{
  if(pswd==acDetails[acno]["password"])
  {
    alert("login successful");
  }
  else
  {
    alert("Incorrect password")
  }
}
else
{
  alert("Invalid user")
}
}
}
