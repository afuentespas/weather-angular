import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchLocationService } from 'src/app/services/search-locations/search-location.service';

@Component({
  selector: 'searcher-cities',
  templateUrl: './searcher-cities.component.html',
  styleUrls: ['./searcher-cities.component.scss']
})
export class SearcherCitiesComponent implements OnInit {

  inputCity: string;

  isInvalid = false;

  @Output() locationsReady = new EventEmitter<Location[]>();

  constructor(private searchLocationService: SearchLocationService) { }

  ngOnInit() { }

  searchCities(){
    if(this.inputCity !== undefined && this.inputCity.trim() != ""){
      this.isInvalid = false; 
      this.searchLocationService.searchLocation(this.inputCity)
      .subscribe( (locationsList: Location[]) => {
        this.locationsReady.emit(locationsList);
      });
    } else {
      this.isInvalid = true;
    }
  }

}
