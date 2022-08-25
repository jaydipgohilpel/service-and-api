import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchApiDataComponent } from './fetch-api-data/fetch-api-data.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { LocalserviceComponent } from './localservice/localservice.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MaterialExampleModule} from './../material.module';
import { MobileComponent } from './mobile/mobile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageModelComponent } from './image-model/image-model.component';
import { MobileSingleRecordComponent } from './mobile-single-record/mobile-single-record.component';
import { HomeComponent } from './home/home.component';
import { ObservableSubComponent } from './observable-sub/observable-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchApiDataComponent,
    AirlinesComponent,
    LocalserviceComponent,
    MobileComponent,
    ImageModelComponent,
    MobileSingleRecordComponent,
    HomeComponent,
    ObservableSubComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MaterialExampleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
