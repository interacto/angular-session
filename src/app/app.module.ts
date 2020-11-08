import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tp1Component } from './component/tp1/tp1.component';
import { Tp2Component } from './component/tp2/tp2.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    Tp1Component,
    Tp2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
