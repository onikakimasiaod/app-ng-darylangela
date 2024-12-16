import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'section-container-media',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
  ],
  templateUrl: './section-container-media.component.html',
  styleUrls: ['./section-container-media.component.scss'],
})
export class SectionContainerMediaComponent {
  @Input() section: any

  private readonly navigationService = inject(NavigationService)

  public navigateToRsvp(): void {
    this.navigationService.navigateTo('/rsvp')
  }

}
