import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has a paragraph with the correct text', () => {
        const element = fixture.nativeElement as HTMLElement;
        const paragraph = element.querySelector('p');
        expect(paragraph).toBeTruthy();
        expect(paragraph?.textContent).toBe('All rights reserved © 2022')
    })
});
