import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'state-weather',
  templateUrl: './state-weather.component.html',
  styleUrls: ['./state-weather.component.scss']
})
export class StateWeatherComponent implements OnInit {

  @Input() inputsDisabled: boolean;

  @Output() stateChange = new EventEmitter<any>();

  private stateSelected: string;

  constructor() { }

  ngOnInit() { 
    this.stateSelected = "none";
  }

  selectChanges(){
    this.stateChange.emit();
  }

  isSelectedState(cityState: string): boolean {
    let hide = false;
    if(this.stateSelected != "none"){
      hide = this.stateSelected != cityState;
    }
    return hide;
  }

  resetFilter(){
    this.stateSelected = "none";
  }

}
