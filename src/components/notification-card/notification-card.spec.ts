import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBarMock, SplashScreenMock, PlatformMock } from '../../../test-config/mocks-ionic';
import { NotificationCardComponent } from './notification-card';

describe('NotificationCard Component', () => {
    let fixture: ComponentFixture<NotificationCardComponent>;
    let component: NotificationCardComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationCardComponent],
            imports: [
                IonicModule.forRoot(NotificationCardComponent)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof NotificationCardComponent).toBe(true);
    });

});