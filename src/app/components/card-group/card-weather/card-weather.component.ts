import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss'],
  host: {'class' : 'card mb-3'}
})
export class CardWeatherComponent implements OnInit {

  @Input() location: Location;

  constructor() { }

  ngOnInit() { }

}
