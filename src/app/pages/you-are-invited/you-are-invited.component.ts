import { Component, inject } from '@angular/core';
import { SectionHeroComponent } from '../../sections/section-hero/section-hero.component';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-you-are-invited',
  standalone: true,
  imports: [SectionHeroComponent],
  templateUrl: './you-are-invited.component.html',
  styleUrls: ['./you-are-invited.component.scss']
})
export class YouAreInvitedComponent {
  private readonly navigationService = inject(NavigationService)
  public readonly HERO = {
    image: '../../assets/you-are-invited-hero.jpg',
  }

  public readonly text = '../../assets/you-are-invited.png'

  public navigateToGuestInfo(): void {
    this.navigationService.navigateTo('/guest-info')
  }
}
