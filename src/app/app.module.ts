import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselItemDirective } from './directivas/carousel-item.directive';
import { CarouselItemElementDirective } from './directivas/carousel-item-element.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
