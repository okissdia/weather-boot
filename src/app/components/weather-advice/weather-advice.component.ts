import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-advice',
  standalone: true,
  imports: [],
  templateUrl: './weather-advice.component.html',
  styleUrl: './weather-advice.component.css'
})
export class WeatherAdviceComponent implements OnInit {
  temperature?: number;
  soilMoisture?: number;
  adviceMessage: string = '';

  constructor(
    private weatherService: WeatherService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.weatherService.getMockWeatherData().subscribe(data => {
      this.temperature = data.temperature;
      this.soilMoisture = data.soilMoisture;
      this.generateAdvice();
    });
  }

  goBack() {
    this.location.back();
  }

  generateAdvice() {
    if (this.temperature !== undefined && this.soilMoisture !== undefined) {
      if (this.temperature < 10 && this.soilMoisture > 50) {
        this.adviceMessage = 'It is cold and wet. You should wear wellington boots.';
      } else if (this.temperature >= 10 && this.soilMoisture <= 50) {
        this.adviceMessage = 'The weather is fine. No need for wellington boots.';
      } else if (this.temperature >= 10 && this.soilMoisture > 50) {
        this.adviceMessage = 'It is warm but wet. You might want to consider wearing wellington boots.';
      } else {
        this.adviceMessage = 'The weather is cold and dry. No need for wellington boots.';
      }
    }
  }
}
