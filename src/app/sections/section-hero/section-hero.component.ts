import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'section-hero',
  imports: [NgIf, NgFor],
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss']
})
export class SectionHeroComponent {
  @Input() section: any
}
