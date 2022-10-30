import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypingAnimationModule } from 'angular-typing-animation';
import { MainComponent } from './sections/main/main.component';
import { HomeComponent } from './sections/main/home/home.component';
import { TypeEffectComponent } from './sections/main/home/type-effect/type-effect.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    TypeEffectComponent
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
