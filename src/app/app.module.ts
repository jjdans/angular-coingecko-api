import { CoinsService } from './services/coins.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsTableComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CoinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
