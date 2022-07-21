import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSectionComponent } from './sections/home-section/home-section.component';
import { MaterialModule } from './material/material.module';
import { TypingAnimationModule } from 'angular-typing-animation';
import { TypeEffectComponent } from './sections/home-section/type-effect/type-effect.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    TypeEffectComponent,
    AboutSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
