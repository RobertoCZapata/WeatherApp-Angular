import { Component, OnInit } from '@angular/core';
import { CityI } from '../../models/model.interface';
import { WeatherService } from '../../services/weatherService/weather.service';
import { DataService } from '../../services/data.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css'],
  providers: [DataService],
})
export class SelectCityComponent implements OnInit {
  weatherData: any;

  public selectedCity: CityI = { id: 0, name: 'City' };
  public cities: CityI[];
  constructor(
    private dataSvc: DataService,
    private weatherService: WeatherService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.cities = this.dataSvc.getCities();
  }

  getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(
      (res) => {
        console.log(res);
        this.weatherData = res;
        //Fixed Temp Value
        this.weatherData.fixed = this.weatherData.main.temp.toFixed(0);
      },
      (err) => console.log(err)
    );
  }

  captureLocation(selectedCity) {
    selectedCity ? this.getWeather(selectedCity) : null;

    return false;
  }
}
