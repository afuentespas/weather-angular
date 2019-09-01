import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWeatherComponent } from './state-weather.component';

describe('StateWeatherComponent', () => {
  let component: StateWeatherComponent;
  let fixture: ComponentFixture<StateWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
