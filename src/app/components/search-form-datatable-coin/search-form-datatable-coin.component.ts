import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-form-datatable-coin',
  templateUrl: './search-form-datatable-coin.component.html',
  styleUrls: ['./search-form-datatable-coin.component.css']
})
export class SearchFormDatatableCoinComponent implements OnInit {

  searchForm = this.formBuilder.group({
    search_text: ''
  });

  @Output() onSearchCoins = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  updateFilter():void {
    const val = this.searchForm.get('search_text')?.value.toLocaleLowerCase();
    this.onSearchCoins.emit(val);
  }
}
