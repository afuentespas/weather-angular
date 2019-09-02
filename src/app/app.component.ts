import { Component, ViewChild } from '@angular/core';
import { CityWeatherService } from './services/city-weather/city-weather.service';
import { forkJoin, Observable } from 'rxjs';
import { ConsolidatedWeather } from './interfaces/consolidate-weather';
import { Location } from './interfaces/location';
import { FilterWeatherComponent } from './components/filter-weather/filter-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Weather Angular';

  consolidatedWeatherObservable: Observable<ConsolidatedWeather[]>;

  locations: Location[];

  citiesLoading: boolean;

  @ViewChild(FilterWeatherComponent, { static: false })
  private temperatureComponent: FilterWeatherComponent;

  constructor(private cityWeatherService: CityWeatherService) { }

  locationsLoad(locations: Location[]) {
    this.temperatureComponent.resetFilters();
    if (locations.length > 0) {
      this.citiesLoading = true;
      locations.forEach(async (location: Location) => {
        let cws = this.cityWeatherService.getWeatherCity(location.woeid);
        this.consolidatedWeatherObservable = forkJoin(cws);
        cws.subscribe((weatherCity: ConsolidatedWeather) => {
          location.weatherDay = weatherCity.consolidated_weather[0];
        });
      });
    }
    this.locations = locations;
  }

}
