import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { IRequestError, IStore } from 'src/app/interfaces';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { restartUser } from 'src/app/store/user/user.actions';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {
    constructor(
        private readonly store: Store<IStore>,
        private readonly authService: AuthService,
        private readonly snackbar: SnackbarService,
        private readonly router: Router,
    ) { }

    logoutStatus = new Subscription();
    ngOnInit(): void {
        this.logoutStatus = this.authService.logout().subscribe({
            next: () => {
                localStorage.removeItem('token');
                this.store.dispatch(restartUser());
                this.router.navigate(['/login']);
                this.snackbar.openSnackbar('Logged out successfully!', 'close', 10);
            },
            error: (res) => {
                const error: IRequestError = res.error;
                this.snackbar.openSnackbar(error.message, 'close', 10);
                this.router.navigate(['/']);
            }
        })
    }

    ngOnDestroy(): void {
        this.logoutStatus.unsubscribe();
    }
}
