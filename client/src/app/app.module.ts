import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BusNumberPipe } from './pipes/bus-number.pipe';
import { BusSelectComponent } from './components/bus-select/bus-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BusNumberPipe,
    BusSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD9gm_F1_1tLl1p9MoW33KG41gcrKqTOxs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


