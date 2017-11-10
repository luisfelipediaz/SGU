import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';

import { NavMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';
import { NotificationsPage } from './notifications';

describe('NotificationsPage', () => {
    let fixture: ComponentFixture<NotificationsPage>;
    let component: NotificationsPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationsPage],
            imports: [
                IonicModule.forRoot(NotificationsPage),
                ComponentsModule
            ],
            providers: [
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavParamsMock  },
                { provide: ModalController, useClass: ModalControllerMock }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof NotificationsPage).toBe(true);
    });

});