import { Component, OnInit } from '@angular/core';
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

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe((response) => {
        this.coins = response;
        this.filteredCoins = response;
      })
  }

  searchCoin(): void {
    this.filteredCoins = this.coins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }
}
