import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { TravelAndStayComponent } from './pages/travel-and-stay/travel-and-stay.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { YouAreInvitedComponent } from './pages/you-are-invited/you-are-invited.component';
import { GuestInfoComponent } from './pages/guest-info/guest-info.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'rsvp',
    component: RsvpComponent,
  },
  {
    path: 'thank-u',
    component: ThankYouComponent,
  },
  {
    path: 'you-are-invited',
    component: YouAreInvitedComponent,
  },
  {
    path: 'guest-info',
    component: GuestInfoComponent,
  },
  {
    path: 'travel-and-stay',
    component: TravelAndStayComponent,
  },
  {
    path: 'our-story',
    component: OurStoryComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
