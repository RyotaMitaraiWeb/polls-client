import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { MenuButtonComponent } from 'src/app/features/menu-button/menu-button.component';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationComponent, BrowserAnimationsModule],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
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
