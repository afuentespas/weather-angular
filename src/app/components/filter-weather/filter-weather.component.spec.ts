import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWeatherComponent } from './filter-weather.component';

describe('FilterWeatherComponent', () => {
  let component: FilterWeatherComponent;
  let fixture: ComponentFixture<FilterWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
