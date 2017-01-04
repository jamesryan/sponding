import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {WorkComponent} from './work/work.component';
import {LoaderComponent} from './loader/loader.component';

//providers
import {HttpService} from './services/http.service';
import {Animations} from './services/animations.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [Animations, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
