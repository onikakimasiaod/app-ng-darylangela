import { Component, OnInit } from '@angular/core';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';
import { HOME } from '../../data/home';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionHeroComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly HOME = HOME
}
