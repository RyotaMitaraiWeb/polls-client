import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { IStore } from 'src/app/interfaces';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { initialState } from 'src/app/store/test-state';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
    let component: LogoutComponent;
    let fixture: ComponentFixture<LogoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LogoutComponent, HttpClientTestingModule, SharedModule],
            providers: [provideMockStore<IStore>(initialState)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LogoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
