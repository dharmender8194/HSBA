import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

import { IpcNetConnectOpts } from 'node:net';
import { IPropertyBase } from '../../ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {


  @ViewChild('Form') addpropertyform: NgForm;
  @ViewChild('formtabs') formtabs?: TabsetComponent;

  propertyTypes: Array<string>=['House','Apartment','Duplex'];
  furnishtyType: Array<string>=['Fully','Semi','unfurnish'];

  propertyview: IPropertyBase={} as IPropertyBase;

  constructor(private router:Router) { }

  selectTab(tabId: number) {
    if (this.formtabs?.tabs[tabId]) {
      this.formtabs.tabs[tabId].active = true;
    }
  }

  ngOnInit()
  {
  }
  OnBack()
  {
this.router.navigate(['/']);
  }
  onsubmit(Form:NgForm){
    console.log('form submitted');
    console.log(this.addpropertyform);
  }


}
