import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopifyAdminService {
  baseUrl = `http://localhost:3000`;

  private ordersSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public orders$: Observable<any> = this.ordersSubject.asObservable();

  private customersSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public customers$: Observable<any> = this.customersSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getOrders(query?){
    this.httpClient.get(`${this.baseUrl}/orders`)
    .pipe(
      tap(data => {
        this.ordersSubject.next(data);
      }, error => {})
    ).subscribe();
  }
  public getCustomers(query = '', fetchAll = false){
    console.log(query);
    this.httpClient.get(`${this.baseUrl}/customers/${query}/${fetchAll}`)
    .pipe(
      tap(data => {
        this.customersSubject.next(data);
      }, error => {})
    ).subscribe();
  }
}
