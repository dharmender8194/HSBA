import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm=new FormGroup({
      //reactive form
      username:new FormControl('Mark',Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmpassword: new FormControl(null,Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.minLength(10)])
          });

  }
  //custom validaters
  //this.passwordmatchingvalidater
  // passwordmatchingvalidater(fg:FormGroup):Validators{
  //   return fg.get('password').value===fg.get('confirmpassword').value?null:
  //   {notmatched:true};


  onsumbmit(){
    console.log(this.registrationForm)
   // alertyfy.success('Success message');
  }

}
