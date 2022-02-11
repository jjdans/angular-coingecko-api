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
  rows1: any = [];

  constructor(protected coinsServices: CoinsService) { }

  ngOnInit(): void {
    //Variante 1
    this.coinsServices.getCoinsList().subscribe((response) => {
      this.coins = response;
      this.rows1 = response;
    })

    //Variante 2
    this.coinsServices.getCoinsList1().subscribe((response) => {
      this.coins = response;
      this.rows1 = response;
    })

    //Variante 3 Subject
    const obs = this.coinsServices.responseObs;
    obs.subscribe((response) => {
      this.coins = response;
      this.rows1 = response;
    })
    this.coinsServices.getCoinsList2();

    //Variante 4 BehaviorSubject
    this.coinsServices.getCoinsList3();
    const obs1 = this.coinsServices.response1Obs;
    obs1.subscribe((response) => {
        this.coins = response;
        this.rows1 = response;
    })
  }
}
