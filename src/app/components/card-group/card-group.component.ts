import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
  host:{'class' : 'row'}
})
export class CardGroupComponent implements OnInit {

  @Input() cityID: number;

  @Input() locations: Location[];

  constructor() { }

  ngOnInit() { }

}
