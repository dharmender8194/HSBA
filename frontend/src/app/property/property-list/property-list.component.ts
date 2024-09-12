
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { error } from 'console';
import { IProperty } from '../IPropert.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit
{
  //SellRent = 1;
  properties:IProperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService){}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      //this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
  }
  this.housingService.getallproperties().subscribe(
      data => {
          this.properties = data;
          console.log(data);
          //console.log(this.route.snapshot.url.toString);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  // this.http.get<Array<any>>('data/properties.json').subscribe
  // (
  //  data=>{
  //     this.properties=data;
  //      console.log(data);
  //        }
  //  )

  }
}
