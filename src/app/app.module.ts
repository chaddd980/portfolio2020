import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PlatformModule} from '@angular/cdk/platform';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RibittDialogBodyComponent } from './ribitt-dialog-body/ribitt-dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    RibittDialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSliderModule,
    MatStepperModule,
    MatToolbarModule,
    PlatformModule,
  ],
  providers: [
    { provide: Window, useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
