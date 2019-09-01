import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'temperature-filter',
  templateUrl: './temperature-filter.component.html',
  styleUrls: ['./temperature-filter.component.scss']
})
export class TemperatureFilterComponent implements OnInit {

  @Input() inputsDisabled: boolean;

  minValue: number;

  maxValue: number;

  minSelect: string;

  maxSelect: string;

  @Output() temperatureChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { 
    this.minSelect = "less";
    this.maxSelect = "less";
  }

  isTemperatureInRange(minTemperatureCity: number, maxTemperatureCity: number): boolean {
    return this.isMinTemperatureRange(minTemperatureCity) || this.isMaxTemperatureInRange(maxTemperatureCity);
  }

  private isMinTemperatureRange(minTemperatureCity: number): boolean {
    return this.temperatureComparator(this.minValue, this.minSelect, minTemperatureCity);
  }

  private isMaxTemperatureInRange(maxTemperatureCity: number): boolean {
    return this.temperatureComparator(this.maxValue, this.maxSelect, maxTemperatureCity);
  }

  private temperatureComparator(inputValue: number, selectOption: string, temperatureCityValue: number){
    let hide = false;
    console.log(inputValue + " : "+ temperatureCityValue);
    if(inputValue !== null && inputValue !== undefined && inputValue.toString() != ""){
        switch(`${selectOption}`){
          case 'less': hide = inputValue < temperatureCityValue ;break;
          case 'greater': hide = inputValue > temperatureCityValue ;break;
          case 'equals': hide = inputValue != temperatureCityValue; break;
        }
    }
    return hide;
  }

  minInputsOnChange($event){
    this.minValue = $event;
    this.temperatureChange.emit();
  }

  minSelectOnChanges($event){
    this.minSelect = $event;
    this.temperatureChange.emit();
  }

  maxInputsOnChange($event){
    this.maxValue = $event;
    this.temperatureChange.emit();
  }

  maxSelectOnChanges($event){
    this.maxSelect = $event;
    this.temperatureChange.emit();
  }

  resetFilter(){
    this.minValue = null;
    this.maxValue = null;
    this.minSelect = "less";
    this.maxSelect = "less";
  }

}
