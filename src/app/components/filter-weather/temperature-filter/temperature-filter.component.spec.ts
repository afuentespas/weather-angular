import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureFilterComponent } from './temperature-filter.component';

describe('TemperatureFilterComponent', () => {
  let component: TemperatureFilterComponent;
  let fixture: ComponentFixture<TemperatureFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
