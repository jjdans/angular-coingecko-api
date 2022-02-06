import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DatatableComponent } from '@swimlane/ngx-datatable';
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

  columns1 = [{ name: 'ID', prop: 'id' }, { prop: 'name' }, { name: 'Symbol', prop: 'symbol' }, { name: 'Image', prop: 'image' }, { name: 'Current Price', prop: 'current_price' }, { name: 'Price Change', prop: 'price_change_percentage_24h' }, { name: '24h Volume', prop: 'total_volume' }];
  rows1: any = [];

  rows2:any = [];
  temp2:any = [];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe((response) => {
        this.coins = response;
        this.filteredCoins = response;
        this.rows1 = response;
        // cache our list
        this.temp2 = [...response];
        // push our inital complete list
        this.rows2 = response;
      })
  }

  searchCoin(): void {
    this.filteredCoins = this.coins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp2.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows2 = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
