import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IPropert.interface';
import { Interface } from 'readline';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getallproperties():Observable<IProperty[]>{
    return this.http.get<Array<any>>('data/properties.json').pipe(
      map(data=>{
        const proppertiesarray:Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id))
            {
            proppertiesarray.push(data[id]);
          }
        }
        return proppertiesarray;
      })
    )
  }
}
