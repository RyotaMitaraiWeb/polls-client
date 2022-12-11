import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationService } from '../validation/validation.service';
import { PollService } from '../poll/poll.service';
import { Router } from '@angular/router';
import { IPollSubmission, IRequestError } from 'src/app/interfaces';
import { Subject, Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';

@Component({
    selector: 'app-create-poll',
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    templateUrl: './create-poll.component.html',
    styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnDestroy {
    constructor(
        private readonly fb: FormBuilder,
        private readonly validator: ValidationService,
        private readonly pollService: PollService,
        private readonly router: Router,
        private readonly snackbar: SnackbarService,
    ) { }

    form = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        description: ['', [Validators.maxLength(500)]],
        choices: this.fb.array([this.createField()], [this.validator.checkForDuplicates(), this.validator.hasAtLeastTwoOptions()])
    })

    createField(): FormGroup {
        return this.fb.group({
            content: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]]
        });
    }

    get choices(): FormArray {
        return this.form.get('choices') as FormArray;
    }

    addField(event: Event) {
        event.preventDefault();
        this.choices.push(this.createField());
    }

    removeField(index: number) {
        this.choices.removeAt(index);
    }

    pollStatus = new Subscription();

    OnSubmit() {
        const submission = { ...this.form.value };
        submission.choices = submission.choices?.map(choice => choice.content);
        this.pollStatus = this.pollService.createPoll(submission as IPollSubmission).subscribe({
            next: (res) => {
                this.snackbar.openSnackbar('Poll created successfully!', 'close', 10);
                this.router.navigate(['/poll/', res.id]);
            },
            error: (res) => {
                const error = res.error as IRequestError;
                this.snackbar.openSnackbar(error.message, 'close', 10);
            }
        });
    }

    ngOnDestroy(): void {
        this.pollStatus.unsubscribe();
    }
}
