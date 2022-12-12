import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-choice',
    standalone: true,
    imports: [CommonModule, MatRadioModule, MatProgressBarModule],
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {
    @Input() content = '';
    @Input() choiceId = 0;
    @Input() total = 0;
    @Input() voteCount = 0;
    @Input() userVote = 0;
}
