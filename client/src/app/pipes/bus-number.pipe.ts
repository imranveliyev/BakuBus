import { Pipe, PipeTransform } from '@angular/core';
import { Bus } from '../models/bus';

@Pipe({
  name: 'busNumber'
})
export class BusNumberPipe implements PipeTransform {

  transform(arr: Array<Bus>, busNumber:string): Array<Bus> {
    return arr.filter(x=>x.routeCode==busNumber);
  }

}
