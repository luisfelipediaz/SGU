import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';

import { NavMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';
import { AvailabilityPage } from './availability';

describe('AvailabilityPage', () => {
    let fixture: ComponentFixture<AvailabilityPage>;
    let component: AvailabilityPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AvailabilityPage],
            imports: [
                IonicModule.forRoot(AvailabilityPage),
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
        fixture = TestBed.createComponent(AvailabilityPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof AvailabilityPage).toBe(true);
    });

});