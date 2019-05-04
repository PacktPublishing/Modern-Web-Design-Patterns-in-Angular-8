import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ColorPipe } from './welcome/color.pipe';
import { HighlightDirective } from './welcome/highlight.directive';
import { UnlessDirective } from './welcome/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ColorPipe,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
