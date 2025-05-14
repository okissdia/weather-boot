import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getMockWeatherData(): Observable<{ temperature: number; soilMoisture: number }> {
    return of({
      temperature: 12, // Example: 12°C
      soilMoisture: 40 // Example: 40% moisture
    });
  }

}
