import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';
import { setUser } from 'src/app/store/user/user.actions';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationComponent, BrowserAnimationsModule, RouterTestingModule],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = TestBed.inject(MockStore);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('includes four links when user is not logged in', () => {
        const element = fixture.debugElement.query(By.css('#nav'));
        const navigation = element.nativeElement as HTMLElement;

        const anchors = navigation.querySelectorAll('a');
        expect(anchors.length).toBe(4);
    });
});
