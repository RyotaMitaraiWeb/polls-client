import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { IPollPreview, IStore, IUser } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { map, Observable } from 'rxjs';
import { close } from 'src/app/store/mobile-menu/mobile-menu.actions';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    constructor(
        private readonly store: Store<IStore>,
        private readonly route: ActivatedRoute,    
    ) {
        this.username = store.select('user').pipe(map(res => res.username));
        store.dispatch(close());
    }

    username!: Observable<string>;
    polls!: IPollPreview[];
    
    ngOnInit(): void {
        this.polls = this.route.snapshot.data['data'];
    }
}
