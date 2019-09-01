import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterWeatherComponent } from './components/filter-weather/filter-weather.component';
import { StateWeatherComponent } from './components/filter-weather/state-filter/state-weather.component';
import { SearcherCitiesComponent } from './components/searcher-cities/searcher-cities.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { CardWeatherComponent } from './components/card-group/card-weather/card-weather.component';
import { TemperatureFilterComponent } from './components/filter-weather/temperature-filter/temperature-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/filter-weather/input-select/input-select.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterWeatherComponent,
    StateWeatherComponent,
    SearcherCitiesComponent,
    CardGroupComponent,
    CardWeatherComponent,
    TemperatureFilterComponent,
    InputSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
