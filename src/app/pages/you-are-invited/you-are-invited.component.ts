import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';

@Component({
  selector: 'app-you-are-invited',
  standalone: true,
  imports: [SectionHeroComponent],
  templateUrl: './you-are-invited.component.html',
  styleUrls: ['./you-are-invited.component.scss']
})
export class YouAreInvitedComponent {
  public readonly HERO = {
    image: '../../assets/you-are-invited-hero.jpg',
  }

  public readonly text = '../../assets/you-are-invited.png'
}
