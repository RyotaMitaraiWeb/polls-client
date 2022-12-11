import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { IPollPreview } from 'src/app/interfaces';

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
    ) { }

    ngOnInit(): void {
        this.polls = this.route.snapshot.data['data'];
    }

    polls!: IPollPreview[]

}
