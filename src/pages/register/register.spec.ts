import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';

import { NavMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavParamsMock } from 'ionic-mocks'
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalControllerMock } from 'ionic-mocks/dist/angular/modal-controller';
import { RegisterPage } from './register';
import { TaskProvider } from '../../providers/task/task';
import { AngularFireModule } from 'angularfire2';
import { AppConfig } from '../../app/app.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('RegisterPage', () => {
    let fixture: ComponentFixture<RegisterPage>;
    let component: RegisterPage;
    const navParamsMock: NavParams = NavParamsMock.instance();
    navParamsMock.data = {
        task: null
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterPage],
            imports: [
                IonicModule.forRoot(RegisterPage),
                ComponentsModule,
                AngularFireModule.initializeApp(AppConfig.firebaseConfig),
                AngularFirestoreModule
            ],
            providers: [
                TaskProvider,
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useFactory: () => navParamsMock  },
                { provide: ModalController, useFactory: () => ModalControllerMock.instance() }
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