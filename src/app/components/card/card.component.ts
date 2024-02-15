import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Coffee } from 'src/app/interfaces/coffee.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  availableOptions = {
    true: '',
    false: 'Sold out'
  }

  numberOfVotesOptions = {
    '=0': 'No ratings',
    'other': '(# votos)'
  }

  @Input()
  coffee?: Coffee;



}
