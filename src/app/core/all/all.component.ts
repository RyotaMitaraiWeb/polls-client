import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { IPollPreview, IStore } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { close } from 'src/app/store/mobile-menu/mobile-menu.actions';

@Component({
    selector: 'app-all',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
    constructor(
        private readonly route: ActivatedRoute,
        private readonly store: Store<IStore>,
    ) {
        store.dispatch(close());
     }

    ngOnInit(): void {
        this.polls = this.route.snapshot.data['data'];
    }

    polls!: IPollPreview[]
}
