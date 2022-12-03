import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
    let component: SearchFieldComponent;
    let fixture: ComponentFixture<SearchFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchFieldComponent, BrowserAnimationsModule],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SearchFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Inputs text successfully', (done: DoneFn) => {
        const compiled = fixture.nativeElement as HTMLElement;
        const input: DebugElement = fixture.debugElement.query(By.css('#search-field'));
        
        input.nativeElement.value = 'test'
        input.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(input.nativeElement.value).toContain('test');
            done();
        });


    });
});
