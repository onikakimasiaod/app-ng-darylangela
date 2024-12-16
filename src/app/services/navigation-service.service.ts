import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private readonly router = inject(Router)

  private readonly location = inject(Location)

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }

  public isGuestInfo(): any {
    return this.location.path() === '/guest-info'
  }
}
