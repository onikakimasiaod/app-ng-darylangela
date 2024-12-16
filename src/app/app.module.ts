import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionFooterComponent } from './sections/section-footer/section-footer.component';
import { SectionHeaderComponent } from './sections/section-header/section-header.component';
import { GuestInfoComponent } from './pages/guest-info/guest-info.component';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GuestInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SectionHeaderComponent,
    SectionFooterComponent,
    HttpClientModule,
    BrowserAnimationsModule,
],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
