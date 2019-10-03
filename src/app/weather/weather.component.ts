import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:string='';
  selectedValue:string ='metric'; 
  unit:string ;

  description:string;
  temperature:number;
  country:string;
  icon:string;
  cityName:string;

  

  constructor(private weather:WeatherService) { }

  ngOnInit() {

  }
   weatherResult(){
    this.unit= "&units="+this.selectedValue;
     
    this.weather.getWeather(this.city,this.unit)
    .subscribe( 
      result => {
        this.description=result.weather[0].description;
        this.temperature=result.main.temp;
        this.country=result.sys.country;
        this.icon=result.weather[0].icon;
        this.cityName=result.name;
        console.log(this.cityName);
        console.log(this.city);
      })
  }
  

}
