import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGameComponent } from './weather-game.component';

describe('WeatherGameComponent', () => {
  let component: WeatherGameComponent;
  let fixture: ComponentFixture<WeatherGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
