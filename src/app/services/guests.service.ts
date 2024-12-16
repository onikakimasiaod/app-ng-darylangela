import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private readonly httpClient = inject(HttpClient)

  private readonly URL = 'https://darylangela.com/data/api'

  private readonly HEADERS = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': 'mvKcLE033cb8R0t4e1xKnamcss1mGt5cOfHwgYIUUm1SNntdQtqhBvuYU8XUB5XLO9V24lDIIFxnvKxzbC1EiZtnXbl56zTpX2H5HFwrVw2JcDW3eeTK8ati09e858d1',
  }); 

  constructor() { }

  public getGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.URL}/guests`)
  }

  public postGuest(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(`${this.URL}/guests`, guest, {headers: this.HEADERS})
  }
}
