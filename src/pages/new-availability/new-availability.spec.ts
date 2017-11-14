import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { NavMock } from '../../../test-config/mocks-ionic';

import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';
import { NewAvailabilityPage } from './new-availability';

describe('NewAvailabilityPage', () => {
    let fixture: ComponentFixture<NewAvailabilityPage>;
    let component: NewAvailabilityPage;
    const navParamsMock: NavParams = NavParamsMock.instance();
    navParamsMock.data = {
        date: new Date()
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewAvailabilityPage],
            imports: [
                IonicModule.forRoot(NewAvailabilityPage),
                ComponentsModule
            ],
            providers: [
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useFactory: () => navParamsMock },
                { provide: ModalController, useFactory: () => ModalControllerMock.instance() }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewAvailabilityPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof NewAvailabilityPage).toBe(true);
    });

});