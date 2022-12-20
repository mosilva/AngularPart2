import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './users/not-found/not-found.component';

const MATERIAL = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MATERIAL],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
