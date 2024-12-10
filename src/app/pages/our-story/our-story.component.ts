import { Component } from '@angular/core';
import { OUR_STORY } from '../../data/our-story';
import { SectionContainerMediaComponent } from "../../sections/section-container-media/section-container-media.component";
import { NgFor, NgIf } from '@angular/common';
import { SectionHeroComponent } from "../../sections/section-hero/section-hero.component";

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [
    SectionContainerMediaComponent,
    NgIf,
    NgFor,
    SectionHeroComponent,
],
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
})
export class OurStoryComponent {
  public readonly OUR_STORY = OUR_STORY
}
