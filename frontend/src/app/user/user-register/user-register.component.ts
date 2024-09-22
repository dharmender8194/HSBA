import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { doesNotMatch } from 'node:assert';

//import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private fb:FormBuilder) { }

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



  // ,this.passwordmatchingvalidater

  // passwordmatchingvalidater(fg:FormGroup):Validators{
  //    return fg.get('passwrod')?.value===fg.get('cpassword')?.value?iprope:

  //    {doesNotMatch:true};
  // }

  onsumbmit(){
    console.log(this.registrationForm)
    if(this.registrationForm.valid){
     // alertyfy.success('Login Done ');
    }

   else
   {
    //alertyfy.error('Login Filed')
   }

  }

}
