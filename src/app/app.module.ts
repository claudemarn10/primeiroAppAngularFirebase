import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ModalProductComponent } from './modal-product/modal-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
       apiKey: 'AIzaSyDLkZJFgoaMNuZpPvSz8ANyXgQ_0Uapf1E',
      authDomain: 'angularzao-55ccd.firebaseapp.com',
      databaseURL: 'https://angularzao-55ccd.firebaseio.com',
      projectId: 'angularzao-55ccd',
      storageBucket: 'angularzao-55ccd.appspot.com',
      messagingSenderId: '265137029423',
      appId: '1:265137029423:web:cf73b7e5dec6056f0f21da'
    }),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule
   ],
   entryComponents: [
      ModalProductComponent
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
