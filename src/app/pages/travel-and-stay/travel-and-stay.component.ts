import { Component } from '@angular/core';
import { TRAVEL_AND_STAY } from '../../data/travel-and-stay';
import { SectionHeroComponent } from 'src/app/sections/section-hero/section-hero.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-travel-and-stay',
  imports: [
    SectionHeroComponent,
    NgIf,
    NgForOf,
  ],
  templateUrl: './travel-and-stay.component.html',
  styleUrls: ['./travel-and-stay.component.scss']
})
export class TravelAndStayComponent {
  public readonly TRAVEL_AND_STAY = TRAVEL_AND_STAY
}
