import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:any={
    1000:{acno:1000,uname:"Akhil",password:"userone",balance:3000},
    1001:{acno:1001,uname:"Abhi",password:"usertwo",balance:1000},
    1002:{acno:1002,uname:"Anu",password:"userthree",balance:5000},
    
  }
  constructor() { }

  register(acno:any,uname:any,password:any)
  {
    let accDetails=this.user;
    if(acno in accDetails)
    {
      return false;
    }
    else{
      accDetails[acno]={
        acno,uname,password,balance:0
      }
      return true;
    }
  }

  signin(acno:any,pswd:any)
  {
    let acDetails=this.user;
if(acno in acDetails)
{
  if(pswd==acDetails[acno]["password"])
  {
    alert("login successful");
    return true;
    
  }
  else
  {
    alert("Incorrect password")
    return false
  }
}
else
{
  alert("Invalid user")
  return false
}
  }
}
