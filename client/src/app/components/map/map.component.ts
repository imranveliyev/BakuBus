import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from 'src/app/models/bus';
import { BusStorageService } from 'src/app/services/bus-storage.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  busses: Array<Bus> = [];
  lat: number = 40.3984603;
  lng: number = 49.8725311;
  zoom: number = 13;
  theme: any;

  constructor(private httpclient: HttpClient, public busStorage:BusStorageService) { }

  async ngOnInit() {
    await this.loadTheme();
    await this.getBusInfo();

    setInterval(async () => {
      await this.getBusInfo()
    }, 10000);

    console.log("Busses loaded.");
  }

  async loadTheme() {
    this.theme = await this.httpclient.get<any>('assets/theme.json').toPromise();
  }

  async getBusInfo() {
    this.busses = await this.httpclient.get<Array<Bus>>('https://localhost:44371/api/businfo').toPromise();
  }

}
