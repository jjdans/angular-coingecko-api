import { Coin } from './../../coin';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.css']
})
export class CoinsTableComponent implements OnInit {

  @Input() coinsList: Coin[] = [];
  @Input() coinsDatatableList: any[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];
  columns1 = [{ prop: 'name' }, { name: 'Symbol', prop: 'symbol' }, { name: 'Image', prop: 'image' }, { name: 'Current Price', prop: 'current_price' }, { name: 'Price Change', prop: 'price_change_percentage_24h' }, { name: '24h Volume', prop: 'total_volume' }];
  searchText = '';
  filteredCoins: Coin[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchCoin(): void {
    this.filteredCoins = this.coinsList.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }

}
