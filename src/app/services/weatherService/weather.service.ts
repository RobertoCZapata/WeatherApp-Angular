import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'd87d5853f77c1ed327e48917d75a5267';
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(selectedCity: string) {
    return this.httpClient.get(`${this.URI}${selectedCity}`);
  }
}
