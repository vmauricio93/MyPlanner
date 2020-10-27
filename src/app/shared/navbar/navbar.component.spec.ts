import { Location } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debugElement: DebugElement;

  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'notebook', component: NotebookComponentMock },
          { path: 'calendar', component: CalendarComponentMock }
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to the notebook page', fakeAsync(
    () => {
      const notebookLink = debugElement.query(By.css('.notebook-link'));
      fixture.ngZone.run(() => {
        notebookLink.triggerEventHandler('click', { button: 0 });
        flush();
        fixture.detectChanges();
        expect(location.path()).toEqual('/notebook');
      });
    })
  );

  it('should route to the calendar page', fakeAsync(
    () => {
      const calendarLink = debugElement.query(By.css('.calendar-link'));
      fixture.ngZone.run(() => {
        calendarLink.triggerEventHandler('click', { button: 0 });
        flush();
        fixture.detectChanges();
        expect(location.path()).toEqual('/calendar');
      });
    })
  );
});

@Component({})
class NotebookComponentMock { }

@Component({})
class CalendarComponentMock { }