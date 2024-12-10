import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private readonly httpClient = inject(HttpClient)

  private readonly URL = 'http://51.44.166.0/api'

  constructor() { }

  public getGuests(): Observable<any> {
    return this.httpClient.get(`${this.URL}/guests`)
  }

  public postGuest(guest: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/guests`, guest)
  }
}
