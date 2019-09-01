import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherCitiesComponent } from './searcher-cities.component';

describe('SearcherCitiesComponent', () => {
  let component: SearcherCitiesComponent;
  let fixture: ComponentFixture<SearcherCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
