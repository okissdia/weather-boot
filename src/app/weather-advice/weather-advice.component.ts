import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-advice',
  standalone: true,
  imports: [],
  templateUrl: './weather-advice.component.html',
  styleUrl: './weather-advice.component.css'
})
export class WeatherAdviceComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
