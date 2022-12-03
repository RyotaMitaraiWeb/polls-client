import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/interfaces';
import { open, close } from 'src/app/store/mobile-menu/mobile-menu.actions';

@Component({
    selector: 'app-menu-button',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
    constructor(private readonly store: Store<IStore>) {
        this.store.select('menu').subscribe(state => {
            this.state = state;
        })
    }
    
    toggle() {
        if (this.state) {
            this.store.dispatch(close());
        } else {
            this.store.dispatch(open());
        }
    }

    state?: boolean;
}
