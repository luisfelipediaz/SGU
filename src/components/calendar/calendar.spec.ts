import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarComponent } from './calendar';
import { StatusBarMock, SplashScreenMock, PlatformMock } from '../../../test-config/mocks-ionic';

describe('Calendar Component', () => {
    let fixture: ComponentFixture<CalendarComponent>;
    let component: CalendarComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarComponent],
            imports: [
                IonicModule.forRoot(CalendarComponent)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof CalendarComponent).toBe(true);
    });

});