import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private readonly httpClient = inject(HttpClient)

  private readonly URL = 'https://darylangela.com/data/api'

  constructor() { }

  public getGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.URL}/guests`)
  }

  public postGuest(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(`${this.URL}/guests`, guest)
  }
}
