import { TestBed } from '@angular/core/testing';

import { SearchLocationService } from './search-location.service';

describe('SearchLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchLocationService = TestBed.get(SearchLocationService);
    expect(service).toBeTruthy();
  });
});
