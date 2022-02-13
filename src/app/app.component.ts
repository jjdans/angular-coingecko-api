import { CoinsService } from './services/coins.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Coin } from './coin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  rows: any = [];
  temp: any = [];

  constructor(protected coinsServices: CoinsService) { }

  ngOnInit(): void {
    //Variante 1
    this.coinsServices.getCoinsList().subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows = response;
      this.temp = response;
    })

    //Variante 2
    this.coinsServices.getCoinsList1().subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows = response;
      this.temp = response;
    })

    //Variante 3 Subject
    const obs = this.coinsServices.responseObs;
    obs.subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows = response;
      this.temp = response;
    })
    this.coinsServices.getCoinsList2();

    //Variante 4 BehaviorSubject
    this.coinsServices.getCoinsList3();
    const obs1 = this.coinsServices.response1Obs;
    obs1.subscribe((response) => {
      this.coins = response;
      this.filteredCoins = response;
      this.rows = response;
      this.temp = response;
    })
  }

  searchCoin($event:any):void {
    this.filteredCoins = this.coins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes($event) ||
      coin.symbol.toLocaleLowerCase().includes($event)
    );
  }

  searchCoinDatatable($event: any): void {
    const temp = this.temp.filter((coin: any) =>
      coin.name.toLocaleLowerCase().includes($event) ||
      coin.symbol.toLocaleLowerCase().includes($event)
    );

    this.rows = temp;
    //this.table.offset = 0;
  }
}
