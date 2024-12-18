import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { SectionFooterComponent } from './sections/section-footer/section-footer.component';
import { SectionHeaderComponent } from './sections/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
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
