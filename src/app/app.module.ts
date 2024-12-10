import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from "./sections/section-header/section-header.component";
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { SectionContainerMediaComponent } from './sections/section-container-media/section-container-media.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SectionHeaderComponent,
    HttpClientModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
