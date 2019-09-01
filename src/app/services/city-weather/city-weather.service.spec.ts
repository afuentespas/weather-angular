import { TestBed } from '@angular/core/testing';

import { CityWeatherService } from './city-weather.service';

describe('CityWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityWeatherService = TestBed.get(CityWeatherService);
    expect(service).toBeTruthy();
  });
});
