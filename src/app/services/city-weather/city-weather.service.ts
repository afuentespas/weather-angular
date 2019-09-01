import { Injectable } from '@angular/core';
import { ConsolidatedWeather } from 'src/app/interfaces/consolidate-weather';
import { Observable } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  constructor(private weatherClient: WeatherClientService) { }

  getWeatherCity(cityID: number): Observable<ConsolidatedWeather> {
    return this.weatherClient.get<ConsolidatedWeather>(`location/${cityID}/`);
  }

}
