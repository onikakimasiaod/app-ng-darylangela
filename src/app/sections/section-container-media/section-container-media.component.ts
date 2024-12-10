import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-container-media',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
  ],
  templateUrl: './section-container-media.component.html',
  styleUrls: ['./section-container-media.component.scss']
})
export class SectionContainerMediaComponent {
  @Input() section: any
}
