import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';

import { NavMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';

import { CalendarPage } from './calendar';
import { TaskProvider } from '../../providers/task/task';
import { AngularFirestore } from 'angularfire2/firestore';

describe('CalendarPage', () => {
    let fixture: ComponentFixture<CalendarPage>;
    let component: CalendarPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarPage],
            imports: [
                IonicModule.forRoot(CalendarPage),
                ComponentsModule
            ],
            providers: [
                TaskProvider,
                AngularFirestore,
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavParamsMock  },
                { provide: ModalController, useClass: ModalControllerMock }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof CalendarPage).toBe(true);
    });

});