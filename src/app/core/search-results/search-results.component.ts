import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PollService } from '../poll/poll.service';
import { IPollPreview } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search-results',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    constructor(
        private readonly route: ActivatedRoute,
        ) { }

    ngOnInit(): void {
        this.polls = this.route.snapshot.data['data'];
    }

    polls!: IPollPreview[];
}
