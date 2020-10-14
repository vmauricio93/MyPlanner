import { Location } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'notebook', component: NotebookComponentMock },
          { path: 'calendar', component: CalendarComponentMock }
        ])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should route to the notebook page', fakeAsync(
    () => {
      const notebookLink = debugElement.query(By.css('.notebook-link'));
      notebookLink.triggerEventHandler('click', { button: 0 });
      flush();
      fixture.detectChanges();
      expect(location.path()).toEqual('/notebook');
    })
  );

  it('should route to the calendar page', fakeAsync(
    () => {
      const calendarLink = debugElement.query(By.css('.calendar-link'));
      calendarLink.triggerEventHandler('click', { button: 0 });
      flush();
      fixture.detectChanges();
      expect(location.path()).toEqual('/calendar');
    })
  );

});

@Component({})
class NotebookComponentMock { }

@Component({})
class CalendarComponentMock { }