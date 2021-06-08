import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArchwizardModule } from 'angular-archwizard';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
