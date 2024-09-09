
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { error } from 'console';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {

  properties:any;
constructor(private HousingService:HousingService){}
ngOnInit(): void {
  this.HousingService.getallproperties().subscribe(
    data=>{
      this.properties=data;
       console.log(data);
      },error=>{console.log(error);}
    )
 // this.http.get('Data/properties.json').subscribe(
   // data=>{
      //this.properties=data;
      //console.log(data)});
}
  }
