import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit()
  {
  }
  OnBack()
  {
this.router.navigate(['/']);
  }
  onsubmit(Form:NgForm){
    console.log('form submitted');
    console.log(Form);
  }

}
