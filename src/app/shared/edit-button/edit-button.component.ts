import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PollService } from 'src/app/core/poll/poll.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-edit-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
    templateUrl: './edit-button.component.html',
    styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {
    constructor(
        private readonly router: Router,
        private readonly pollService: PollService,
        private readonly snackbar: SnackbarService,
    ) { }

    @Input() pollId: number = 0;
}

