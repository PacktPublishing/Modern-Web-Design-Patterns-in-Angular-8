import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { PasswordMatchesDirective } from './password-matches.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ForbiddenValidatorDirective,
    PasswordMatchesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  entryComponents: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
