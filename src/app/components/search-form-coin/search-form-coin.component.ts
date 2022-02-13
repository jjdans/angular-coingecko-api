import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form-coin',
  templateUrl: './search-form-coin.component.html',
  styleUrls: ['./search-form-coin.component.css']
})
export class SearchFormCoinComponent implements OnInit {

  searchText = '';

  @Output() onSearchCoins = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  searchCoin(): void {
    this.onSearchCoins.emit(this.searchText.toLocaleLowerCase());
  }

}
