import { CoinsService } from './services/coins.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';
import { SearchFormCoinComponent } from './components/search-form-coin/search-form-coin.component';
import { CoinsDatatableComponent } from './components/coins-datatable/coins-datatable.component';
import { SearchFormDatatableCoinComponent } from './components/search-form-datatable-coin/search-form-datatable-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsTableComponent,
    SearchFormCoinComponent,
    CoinsDatatableComponent,
    SearchFormDatatableCoinComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
