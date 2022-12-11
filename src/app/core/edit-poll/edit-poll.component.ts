import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PollService } from '../poll/poll.service';
import { IPoll, IRequestError } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-edit-poll',
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    templateUrl: './edit-poll.component.html',
    styleUrls: ['./edit-poll.component.scss']
})

export class EditPollComponent implements OnInit, OnDestroy {
    constructor(
        private readonly snackbar: SnackbarService,
        private readonly pollService: PollService,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly fb: FormBuilder,
    ) { }

    poll!: IPoll;

    ngOnInit(): void {
        this.poll = this.route.snapshot.data['data'];
        this.title = this.poll.title;
        this.form = this.fb.group({
            title: [this.title, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        });

        this.pollId = Number(this.route.snapshot.paramMap.get('id'));
    }
    
    title!: string;
    pollId!: number;

    form!: FormGroup<{ title: FormControl<string | null>; }>;

    editStatus = new Subscription();

    OnSubmit() {
        const newTitle = this.form.value.title || '';
        this.editStatus = this.pollService.editPoll(this.pollId, newTitle).subscribe({
            next: () => {
                this.snackbar.openSnackbar('Edited poll successfully!', 'close', 10);
                this.router.navigate(['/poll', this.pollId]);
            },
            error: (res) => {
                const error = res.error as IRequestError;
                this.snackbar.openSnackbar(error.message, 'close', 10);
            }
        });
    }

    ngOnDestroy(): void {
        this.editStatus.unsubscribe();
    }
}
