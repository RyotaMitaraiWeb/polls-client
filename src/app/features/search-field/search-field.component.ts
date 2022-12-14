import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-field',
    standalone: true,
    imports: [CommonModule, SharedModule, FormsModule],
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchFieldComponent {
    constructor(private readonly router: Router) { }

    title: string = '';

    search(title: string) {
        if (title !== '') {
            this.router.navigate(['/poll'], {
                queryParams: { search: title }
            });
        }
    }
}
