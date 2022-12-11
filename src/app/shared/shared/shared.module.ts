import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { ChoiceComponent } from '../choice/choice.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatSnackBarModule,
        MatListModule,
        MatRadioModule,
        ChoiceComponent,
        MatProgressBarModule,
        MatTreeModule,
        DeleteButtonComponent,
        EditButtonComponent,
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatListModule,
        MatRadioModule,
        ChoiceComponent,
        MatProgressBarModule,
        MatTreeModule,
        DeleteButtonComponent,
        EditButtonComponent,
    ]
})
export class SharedModule { }
