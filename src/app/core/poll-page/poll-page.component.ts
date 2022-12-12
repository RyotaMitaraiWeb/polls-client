import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollService } from '../poll/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { Subscription } from 'rxjs';
import { IPoll, IRequestError } from 'src/app/interfaces';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-poll-page',
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    templateUrl: './poll-page.component.html',
    styleUrls: ['./poll-page.component.scss']
})
export class PollPageComponent implements OnInit, OnDestroy {
    constructor(
        private readonly pollService: PollService,
        private readonly route: ActivatedRoute,
        private readonly snackbar: SnackbarService,
        private readonly fb: FormBuilder,
    ) {
        this.pollId = Number(route.snapshot.paramMap.get('id'));
    }

    poll!: IPoll;
    pollId!: number;
    form = this.fb.group({
        choice: ['', [Validators.required]]
    })

    ngOnInit(): void {
        this.poll = this.route.snapshot.data['data'];
        if (this.poll.hasVoted) {
            this.form.disable();
        }
    }

    get voteCounts() {
        return this.poll.voteCount;
    }

    get totalCount(): number {
        const counts = this.voteCounts?.map(vc => vc.count);
        const sum = counts?.reduce((a, b) => a + b, 0);
        return sum as number;
    }

    ngOnDestroy(): void {
        this.voteStatus.unsubscribe();
        this.pollStatus.unsubscribe();
    }

    voteStatus = new Subscription();
    pollStatus = new Subscription();

    OnSubmit() {
        const choiceId: number = Number(this.form.value.choice);
        this.voteStatus = this.pollService.vote(this.pollId, choiceId).subscribe({
            next: () => {
                this.snackbar.openSnackbar('You voted successfully!', 'close', 10)
                this.pollStatus = this.pollService.getPoll(this.pollId).subscribe({
                    next: (poll) => {
                        this.poll = poll;
                        this.form.disable();
                    },
                    error: (res) => {
                        const error = res.error as IRequestError;
                        this.snackbar.openSnackbar(error.message, 'close', 10);
                    }
                })
            },
            error: (res) => {
                const error = res.error as IRequestError;
                this.snackbar.openSnackbar(error.message, 'close', 10);
            }
        });
    }
}
