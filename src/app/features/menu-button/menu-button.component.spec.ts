import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';

import { MenuButtonComponent } from './menu-button.component';

describe('MenuButtonComponent', () => {
    let component: MenuButtonComponent;
    let fixture: ComponentFixture<MenuButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuButtonComponent],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(MenuButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('toggle method does not throw', () => {
        expect(() => component.toggle()).not.toThrow();
    });
});
