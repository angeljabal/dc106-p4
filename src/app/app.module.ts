import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantsService } from './participants/participants.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
