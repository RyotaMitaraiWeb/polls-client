import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PollService } from 'src/app/core/poll/poll.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { IRequestError } from 'src/app/interfaces';

@Component({
    selector: 'app-delete-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './delete-button.component.html',
    styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnDestroy {
    constructor(
        private readonly router: Router,
        private readonly pollService: PollService,
        private readonly snackbar: SnackbarService,
    ) { }

    @Input() pollId: number = 0;

    pollStatus = new Subscription();

    DeletePoll(event: Event) {
        event.preventDefault();
        this.pollStatus = this.pollService.deletePoll(this.pollId).subscribe({
            next: () => {
                this.snackbar.openSnackbar('Deleted poll successfully!', 'close', 10);
                this.router.navigate(['/']);
            },
            error: (res) => {
                const error = res.error as IRequestError;
                this.snackbar.openSnackbar(error.message, 'close', 10);
            }
        })
    }

    ngOnDestroy(): void {
        this.pollStatus.unsubscribe();
    }
}
