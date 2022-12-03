import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { IRequestError, IStore } from './interfaces';
import { AuthService } from './core/auth/auth.service';
import { restartUser, setUser } from './store/user/user.actions';
import { close } from './store/mobile-menu/mobile-menu.actions';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        private readonly store: Store<IStore>,
        private readonly authService: AuthService,
    ) {
        store.select('menu').subscribe(state => {
            this.locked = state;
        });
    }

    ngOnInit(): void {
        this.authService.isLoggedIn().subscribe({
            next: (res) => {
                this.store.dispatch(setUser(res));
            },
            error: () => {
                this.store.dispatch(restartUser());
            }
        });
    }

    changeTheme() {
        this.theme = 'purple';
    }

    closeMenu() {
        this.store.dispatch(close());
    }

    title = 'client';
    theme = 'blue';
    locked?: boolean;
}