import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { Store } from '@ngrx/store';
import { IRequestError, IStore, IUserAuth, IUserResponse } from 'src/app/interfaces';
import { setUser } from 'src/app/store/user/user.actions';
import { Router } from '@angular/router';
import { close } from 'src/app/store/mobile-menu/mobile-menu.actions';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly snackbar: SnackbarService,
        private readonly store: Store<IStore>,
        private readonly router: Router,
    ) { 
        store.dispatch(close());
    }

    hidePassword: boolean = true;
    profile = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    loginStatus = new Subject();

    togglePasswordVisibility(event: Event) {
        event.preventDefault();
        this.hidePassword = !this.hidePassword;
    }

    onSubmit() {
        const user: IUserAuth = this.profile.value as IUserAuth;
        this.authService.login(user).subscribe({
            next: (res) => {
                const user = res as IUserResponse;
                localStorage.setItem('token', user.accessToken);
                this.store.dispatch(setUser({
                    id: user.id,
                    username: user.username
                }));

                this.router.navigate(['/']);
                this.snackbar.openSnackbar('Logged in successfully!', 'close', 10);
            },
            error: (res) => {
                const error: IRequestError = res.error;
                this.snackbar.openSnackbar('Wrong username or password', 'close', 10);
            }
        })
    }

    ngOnDestroy(): void {
        this.loginStatus.next(null);
        this.loginStatus.complete();
    }
}
