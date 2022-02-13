import { Coin } from './../../coin';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.css']
})
export class CoinsTableComponent implements OnInit {

  @Input() coinsList: Coin[] = [];

  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
