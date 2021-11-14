import { Injectable } from '@angular/core';
import { CityI } from '../models/model.interface';

@Injectable()
export class DataService {
  private cities: CityI[] = [
    {
      id: 0,
      name: 'City',
    },
    {
      id: 1,
      name: 'miami',
    },
    {
      id: 2,
      name: 'bogota',
    },
    {
      id: 3,
      name: 'paris',
    },
    {
      id: 4,
      name: 'londres',
    },
    {
      id: 5,
      name: 'tokio',
    },
    {
      id: 6,
      name: 'seul',
    },
    {
      id: 7,
      name: 'lisboa',
    },
    {
      id: 8,
      name: 'medellin',
    },
    {
      id: 9,
      name: 'belgica',
    },
  ];

  getCities(): CityI[] {
    return this.cities;
  }
}
