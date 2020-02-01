import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusStorageService {
  selectedBus: string = '0';
}
