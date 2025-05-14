// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LandingPageComponent } from './landing-page.component';

// describe('LandingPageComponent', () => {
//   let component: LandingPageComponent;
//   let fixture: ComponentFixture<LandingPageComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LandingPageComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LandingPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // ✅ New recommended way
import { Location } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { Router } from '@angular/router'; 

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let location: Location;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
      providers: [provideRouter([{ path: 'advice', component: LandingPageComponent }])] // ✅ Use provideRouter
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    navigateSpy = spyOn(router, 'navigate'); // ✅ Spy on the router's navigate method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display intro text correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to WeatherBoot!');
    expect(compiled.querySelector('p')?.textContent).toContain('Your personal weather advisor to know if you need wellington boots!');
  });

  it('should display the "Get Weather Advice" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy(); // ✅ Button exists
    expect(button?.textContent).toContain('Get Weather Advice'); // ✅ Correct text
  });

  it('should navigate to the weather advice page when the button is clicked', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button')!;

    button.click();
    fixture.detectChanges();

    await fixture.whenStable(); // ✅ Ensure async navigation completes

    expect(navigateSpy).toHaveBeenCalledWith(['/weather-advice']);
    // expect(location.path()).toBe(''); // ✅ Verify correct navigation
  });
});


