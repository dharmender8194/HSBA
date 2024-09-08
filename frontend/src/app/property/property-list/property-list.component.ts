import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any>=[
    {
    "id":1,
    "Type":"House",
    "Name":"Birla house",
    "price":12000
     },
     {
      "id":2,
      "Type":"House",
      "Name":"pankaj house",
      "price":13000
       },
       {
        "id":3,
        "Type":"House",
        "Name":"nitesh house",
        "price":14000
         },
         {
          "id":4,
          "Type":"House",
          "Name":"salim house",
          "price":14000
           },
           {
            "id":5,
            "Type":"House",
            "Name":"narender house",
            "price":15000
             },
             {
              "id":6,
              "Type":"House",
              "Name":"alam house",
              "price":12000
               },
               {
                "id":7,
                "Type":"House",
                "Name":"priyanka house",
                "price":12000
                 },
                 {
                  "id":8,
                  "Type":"House",
                  "Name":"akki house",
                  "price":12000
                   },
                   {
                    "id":9,
                    "Type":"House",
                    "Name":"alok house",
                    "price":12000
                     },

]
}
