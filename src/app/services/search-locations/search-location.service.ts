import { Injectable } from '@angular/core';
import { WeatherClientService } from '../weather-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchLocationService {

  constructor(private weatherClient: WeatherClientService) { }

  public searchLocation (city: string): Observable<Location[]> {
    return this.weatherClient.get<Location[]>(`search/?query=${city}`);
  }

}
