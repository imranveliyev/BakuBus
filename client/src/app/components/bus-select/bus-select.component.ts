import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusStorageService } from 'src/app/services/bus-storage.service';

@Component({
  selector: 'app-bus-select',
  templateUrl: './bus-select.component.html',
  styleUrls: ['./bus-select.component.scss']
})
export class BusSelectComponent implements OnInit {

  busNumbers: Array<string> = [];

  constructor(private httpClient: HttpClient, private busStorage: BusStorageService) { }

  async ngOnInit() {
    try {
      this.busNumbers = await this.httpClient.get<Array<string>>('https://localhost:44371/api/busnumbers').toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  onSelectionChanged(busNumber: string) {
    this.busStorage.selectedBus = busNumber;
  }

}
