import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { IStore } from './interfaces';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './core/auth/auth.service';
import { initialState } from './store/test-state';
import { FooterComponent } from './core/footer/footer.component';


describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, HeaderComponent, HttpClientTestingModule, FooterComponent
            ],
            declarations: [
                AppComponent
            ],
            providers: [provideMockStore<IStore>(initialState),
            AuthService
        ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'client'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('client');
    });
});
