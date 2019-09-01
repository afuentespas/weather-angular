import { TestBed } from '@angular/core/testing';

import { WeatherClientService } from './weather-client.service';

describe('WeatherClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherClientService = TestBed.get(WeatherClientService);
    expect(service).toBeTruthy();
  });
});
