import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ValidationService } from 'src/app/core/validation/validation.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { IStore } from 'src/app/interfaces';
import { initialState } from 'src/app/store/test-state';

import { LoginComponent } from './login.component';

describe('RegisterComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginComponent, HttpClientTestingModule, BrowserAnimationsModule],
            providers: [
                provideMockStore<IStore>(initialState),
                AuthService,
                SnackbarService,
                ValidationService,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('inputs in username field successfully', (done: DoneFn) => {
        const element = fixture.debugElement.query(By.css('#username'));
        const field = element.nativeElement as HTMLInputElement;
        field.value = '12345';
        field.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(field.value).toContain('12345');
            done()
        });
    });

    it('inputs in password field successfully', (done: DoneFn) => {
        const element = fixture.debugElement.query(By.css('#password'));
        const field = element.nativeElement as HTMLInputElement;
        field.value = '12345';
        field.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(field.value).toContain('12345');
            done();
        });
    });

    it('Submit button is disabled when username is invalid', (done: DoneFn) => {
        const element = fixture.debugElement.query(By.css('#username'));
        const field = element.nativeElement as HTMLInputElement;

        const submitElement = fixture.debugElement.query(By.css('#auth-submit'));
        const submit = submitElement.nativeElement as HTMLButtonElement;

        field.value = '1';
        field.dispatchEvent(new Event('input'));
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(submit.disabled).toBeTrue();
            done();
        });
    });

    it('Submit button is disabled when password is invalid', (done: DoneFn) => {
        const element = fixture.debugElement.query(By.css('#password'));
        const field = element.nativeElement as HTMLInputElement;

        const submitElement = fixture.debugElement.query(By.css('#auth-submit'));
        const submit = submitElement.nativeElement as HTMLButtonElement;

        field.value = '';
        field.dispatchEvent(new Event('input'));
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(submit.disabled).toBeTrue();
            done();
        });
    });

    it('Submit button is enabled when all fields are valid', (done: DoneFn) => {
        const usernameElement = fixture.debugElement.query(By.css('#username'));
        const usernameField = usernameElement.nativeElement as HTMLInputElement;

        const passwordElement = fixture.debugElement.query(By.css('#password'));
        const passwordField = passwordElement.nativeElement as HTMLInputElement;

        const submitElement = fixture.debugElement.query(By.css('#auth-submit'));
        const submit = submitElement.nativeElement as HTMLButtonElement;

        usernameField.value = 'ryota5';
        usernameField.dispatchEvent(new Event('input'));
        fixture.whenStable().then(() => {
            fixture.detectChanges();
        });

        passwordField.value = '123456';
        passwordField.dispatchEvent(new Event('input'));
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(submit.disabled).toBeFalse();
            done();
        });
    });

    it('togglePasswordVisibility works', () => {
        component.togglePasswordVisibility(new Event('click'));
        expect(component.hidePassword).toBeFalse();

        component.togglePasswordVisibility(new Event('click'));
        expect(component.hidePassword).toBeTrue();
    });

    it('Toggle password visibility button works', (done: DoneFn) => {
        const buttonElement = fixture.debugElement.query(By.css('#password-visibility'));
        const button = buttonElement.nativeElement as HTMLButtonElement;

        const passwordFieldElement = fixture.debugElement.query(By.css('#password'));
        const passwordField = passwordFieldElement.nativeElement as HTMLInputElement;

        button.click();
        fixture.detectChanges();
        expect(passwordField.type).toBe('text');

        button.click();
        fixture.detectChanges();
        expect(passwordField.type).toBe('password');

        done();
    });
});