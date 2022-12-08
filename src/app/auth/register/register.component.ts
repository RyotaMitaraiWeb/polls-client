import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/core/validation/validation.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { IUserAuth, IUserResponse, IStore, IRequestError } from 'src/app/interfaces';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setUser } from 'src/app/store/user/user.actions';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
    constructor(
        private readonly fb: FormBuilder,
        private readonly validator: ValidationService,
        private readonly authService: AuthService,
        private readonly store: Store<IStore>,
        private readonly router: Router,
        private readonly snackbar: SnackbarService
    ) { }

    profile = this.fb.group({
        username: ['', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15),
        ],
            [this.validator.checkIfUserExists()]
        ],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })

    hidePassword: boolean = true;
    registerStatus = new Subject();

    togglePasswordVisibility(event: Event) {
        event.preventDefault();
        this.hidePassword = !this.hidePassword;
    }

    onSubmit() {
        const user: IUserAuth = this.profile.value as IUserAuth;
        this.authService.register(user).pipe(takeUntil(this.registerStatus))
            .subscribe({
                next: (res) => {
                    res = res as IUserResponse;
                    localStorage.setItem('token', res.accessToken);
                    this.store.dispatch(setUser({
                        id: res.id,
                        username: res.username
                    }));

                    this.router.navigate(['/']);
                    this.snackbar.openSnackbar('Registered successfully!', 'close', 10);
                },
                error: (res) => {
                    const error: IRequestError = res.error;
                    this.snackbar.openSnackbar(error.message, 'close', 10);
                }
            })
    }

    ngOnDestroy(): void {
        this.registerStatus.next(null);
        this.registerStatus.complete();
    }
}
