import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatToolbarModule,MatIconModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
