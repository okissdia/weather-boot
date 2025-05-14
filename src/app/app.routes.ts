import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeatherAdviceComponent } from './components/weather-advice/weather-advice.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'weather-advice', component: WeatherAdviceComponent }
];
