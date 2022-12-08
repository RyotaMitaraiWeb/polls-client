import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/interfaces';
import { Observable, map } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private readonly store: Store<IStore>) {
        this.user$ = store.select('user').pipe(map(user => user.username));
    }

    user$?: Observable<string>;
}