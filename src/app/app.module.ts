import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchApiDataComponent } from './fetch-api-data/fetch-api-data.component';
import { AirlinesComponent } from './airlines/airlines.component'
import { HttpClientModule } from '@angular/common/http';
// import { MaterialExampleModule } from '../material.module';
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort';
import { LocalserviceComponent } from './localservice/localservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchApiDataComponent,
    AirlinesComponent,
    LocalserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    // MaterialExampleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }