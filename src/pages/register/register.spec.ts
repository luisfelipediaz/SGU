import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';

import { NavMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';
import { RegisterPage } from './register';

describe('RegisterPage', () => {
    let fixture: ComponentFixture<RegisterPage>;
    let component: RegisterPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterPage],
            imports: [
                IonicModule.forRoot(RegisterPage),
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
        fixture = TestBed.createComponent(RegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component instanceof RegisterPage).toBe(true);
    });

});