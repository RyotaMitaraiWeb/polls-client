import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';


@Component({
    selector: 'app-poll-preview',
    standalone: true,
    imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule, MatIconModule,EditButtonComponent, DeleteButtonComponent],
    templateUrl: './poll-preview.component.html',
    styleUrls: ['./poll-preview.component.scss'],
})
export class PollPreviewComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() pollId: number = 0;
    @Input() personal: boolean = false;
}
