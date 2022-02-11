import { CoinsService } from './services/coins.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];

  searchText = '';
  columns1 = [{ prop: 'name' }, { name: 'Symbol', prop: 'symbol' }, { name: 'Image', prop: 'image' }, { name: 'Current Price', prop: 'current_price' }, { name: 'Price Change', prop: 'price_change_percentage_24h' }, { name: '24h Volume', prop: 'total_volume' }];
  rows1: any = [];

  constructor(protected coinsServices: CoinsService) { }

  ngOnInit(): void {
    //Variante 1
    this.coinsServices.getCoinsList().subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows1 = response;
    })

    //Variante 2
    this.coinsServices.getCoinsList1().subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows1 = response;
    })

    //Variante 3 Subject
    const obs = this.coinsServices.responseObs;
    obs.subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows1 = response;
    })
    this.coinsServices.getCoinsList2();

    //Variante 4 BehaviorSubject
    this.coinsServices.getCoinsList3();
    const obs1 = this.coinsServices.response1Obs;
    obs1.subscribe((response) => {
        this.coins = response;
        this.filteredCoins = response;
        this.rows1 = response;
    })
  }

  searchCoin(): void {
    this.filteredCoins = this.coins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }
}
