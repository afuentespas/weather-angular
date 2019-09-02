import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Location } from 'src/app/interfaces/location';

@Component({
  selector: 'card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
  host:{'class' : 'row'}
})
export class CardGroupComponent implements OnInit {

  @Input() cityID: number;

  @Input() locations: Location[];

  hasCities: boolean = false;

  constructor() { }

  ngOnInit() { }

  ngDoCheck(){
    let citiesHideCount = 0;
    this.locations.forEach( (location: Location) => {
      if(location.hide) citiesHideCount++;
    });
    if(this.locations.length == citiesHideCount) this.hasCities = false;
    else this.hasCities = true;
  }

}
