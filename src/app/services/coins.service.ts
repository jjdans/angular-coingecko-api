import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number
}

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  private response = new Subject<Coin[]>();

  private response1 = new BehaviorSubject<Coin[]>([]);

  constructor(private http: HttpClient) { }

  public get responseObs(): Observable<Coin[]> {
    return this.response.asObservable();
  }

  public get response1Obs(): Observable<Coin[]> {
    return this.response1.asObservable().pipe(
      filter((response) => response != [])
    );
  }

  /**
   * Variante devolviendo el observable
   * @returns Observable<Coin[]>
   */
  public getCoinsList(): Observable<Coin[]> {
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  }

  /**
   * Variante devolviendo el observable
   * @returns Observable<Coin[]>
   */
  public getCoinsList1(): Observable<Coin[]> {
    const response = new Subject<Coin[]>();
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe((data) => {
        response.next(data);
      });
    return response.asObservable();
  }

  /**
   * Variante devolviendo el observable con Subject
   * @returns Observable<Coin[]>
   */
  public getCoinsList2(): Observable<Coin[]> {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe((data) => {
        this.response.next(data);
      });
    return this.response.asObservable();
  }

  /**
   * Variante devolviendo el observable con BehaviorSubject
   * @returns Observable<Coin[]>
   */
  public getCoinsList3(): Observable<Coin[]> {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe((data) => {
        this.response1.next(data);
      });
    return this.response1.asObservable();
  }
}
