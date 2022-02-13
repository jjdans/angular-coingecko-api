import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coins-datatable',
  templateUrl: './coins-datatable.component.html',
  styleUrls: ['./coins-datatable.component.css']
})
export class CoinsDatatableComponent implements OnInit {

  @Input() coinsDatatableList: any[] = [];

  columns1 = [{ prop: 'name' }, { name: 'Symbol', prop: 'symbol' }, { name: 'Image', prop: 'image' }, { name: 'Current Price', prop: 'current_price' }, { name: 'Price Change', prop: 'price_change_percentage_24h' }, { name: '24h Volume', prop: 'total_volume' }];

  constructor() { }

  ngOnInit(): void {
  }

}
