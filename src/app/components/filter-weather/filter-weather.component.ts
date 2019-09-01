import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Location } from 'src/app/interfaces/location';
import { TemperatureFilterComponent } from './temperature-filter/temperature-filter.component';
import { StateWeatherComponent } from './state-filter/state-weather.component';

@Component({
  selector: 'filter-weather',
  templateUrl: './filter-weather.component.html',
  styleUrls: ['./filter-weather.component.scss']
})
export class FilterWeatherComponent implements OnInit {

  @Input() filterDisabled: boolean;

  @Input() locations: Location[];

  @ViewChild(TemperatureFilterComponent, {static: false})
  private temperatureComponent: TemperatureFilterComponent;

  @ViewChild(StateWeatherComponent, {static: false})
  private stateComponent: StateWeatherComponent;

  constructor() { }

  ngOnInit() { }

  onChangesInFilters(){
    this.locations.forEach( (location: Location) => { 
      location.hide = this.temperatureComponent.isTemperatureInRange(Math.round(location.weatherDay.min_temp), Math.round(location.weatherDay.max_temp)) ||
                      this.stateComponent.isSelectedState(location.weatherDay.weather_state_abbr);
      
    });
  }

  resetFilters(){
    this.temperatureComponent.resetFilter();
    this.stateComponent.resetFilter();
  }

}
