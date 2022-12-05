import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStore, IUser } from '../../../app/interfaces';
import { Store } from '@ngrx/store';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('openClose', [
            state('closed', style({
                width: '0',
            })),
            state('open', style({
                width: '50%',
            })),
            transition('closed => open', [
                animate('0.2s')
            ]),
            transition('open => closed', [
                animate('0s')
            ])
        ])
    ]
})
export class NavigationComponent {
    constructor(private readonly store: Store<IStore>) {
        store.select('user').subscribe((state: IUser) => {
            this.user = state;
        });

        store.select('menu').subscribe(state => {
            this.isOpen = state;
        })
    }

    user?: IUser;
    isOpen: boolean = false;
}
