import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() label: string;

  @Input() disabled: boolean;

  @Input() inputModel: number;

  @Input() selectModel: string;

  @Output() inputsChange = new EventEmitter<any>();

  @Output() selectsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  valueInputChanges(){
    this.inputsChange.emit(this.inputModel);
  }

  valueSelectChanges(){
    this.selectsChange.emit(this.selectModel);
  }

}
