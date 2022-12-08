import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { initialState } from 'src/app/store/test-state';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let store: MockStore<IStore>;
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [HomeComponent, SharedModule, RouterTestingModule],
                providers: [provideMockStore<IStore>(initialState)]
            })
                .compileComponents();

            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
            store = TestBed.inject(MockStore);
            fixture.detectChanges();
        });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
