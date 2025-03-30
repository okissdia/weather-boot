import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherAdviceComponent } from './weather-advice/weather-advice.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'weather-advice', component: WeatherAdviceComponent }
];
