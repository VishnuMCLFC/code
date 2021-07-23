import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
register()
{
  var uname=this.uname;
  console.log(uname);
  
  var acno=this.acno;
  var pswd=this.pswd;
  var result=this.ds.register(acno,uname,pswd)
  if(result)
  {
    alert("Registration successful");
    this.router.navigateByUrl("");
  }
  else{
    alert("User exists");
    this.router.navigateByUrl("");
  }
}
}
