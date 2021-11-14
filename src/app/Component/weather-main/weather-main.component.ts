import { Component, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { SelectCityComponent } from '../select-city/select-city.component';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  WeatherData: any;
  faSun = faSun;

  constructor() {}

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    let data = JSON.parse(this.WeatherData);
    this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celsius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
  }
}
