import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FeaturesModule } from '../../../app/features/features.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MenuButtonComponent } from 'src/app/features/menu-button/menu-button.component';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/interfaces';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, NavigationComponent, MenuButtonComponent, FeaturesModule, SharedModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private readonly store: Store<IStore>) {
        store.select('menu').subscribe(state => {
            this.menu = state;
        })
    }

    menu?: boolean;
}
