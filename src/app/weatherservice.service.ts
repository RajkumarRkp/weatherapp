import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherData } from './weatherData.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  id:string="&APPID=a020ad689aa30c7821c09e3838c1b02a"
  endPoint:string=`https://api.openweathermap.org/data/2.5/weather?q=`
  unit:string='&units=metric'

  
  constructor(private http:HttpClient) {
   }

  getWeather(city:string,u?:string){
    console.log(city);
    return this.http.get<weatherData>(this.endPoint+city+this.id+u)
  }

}
