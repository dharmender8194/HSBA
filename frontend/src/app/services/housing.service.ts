import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getallproperties(SellRent:number):Observable<IPropertyBase[]>{
    return this.http.get<Array<IPropertyBase>>('data/properties.json').pipe(
      map(data=>{
        const proppertiesarray:Array<IPropertyBase>=[];
        for(const id in data){
          if(Number(data.hasOwnProperty(id)) && data[id].SellRent===SellRent)
            {
            proppertiesarray.push(data[id]);
          }
        }
        return proppertiesarray;
      })
    )
  }
}
