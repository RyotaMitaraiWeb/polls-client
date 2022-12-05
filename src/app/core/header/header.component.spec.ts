import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let store: MockStore<IStore>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent, BrowserAnimationsModule, RouterTestingModule],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('features a navigation element and search field', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const header = compiled.querySelector('header') as HTMLElement;
        const searchField = compiled.querySelector('input') as HTMLInputElement;
        expect(header.id).toBe('header');
        expect(searchField.name).toBe('search');
    });

    it('dispatches action upon clicking burger menu', () => {
        const storeSpy = spyOn(store, 'dispatch').and.callThrough();
        const element = fixture.nativeElement as HTMLElement;
        const button = element.querySelector('button') as HTMLButtonElement;
        button.click();
        expect(storeSpy).toHaveBeenCalledTimes(1);
    });
});
