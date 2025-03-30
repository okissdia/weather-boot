import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAdviceComponent } from './weather-advice.component';

describe('WeatherAdviceComponent', () => {
  let component: WeatherAdviceComponent;
  let fixture: ComponentFixture<WeatherAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherAdviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
