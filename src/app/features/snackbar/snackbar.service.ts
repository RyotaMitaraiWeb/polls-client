import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private readonly snackbar: MatSnackBar) { }

    openSnackbar(message: string | string[], closeText: string, seconds: number) {
        let error: string;

        if (Array.isArray(message)) {
            error = message.join('\n\n ');
        } else {
            error = message;
        }

        this.snackbar.open(error, closeText, {
            duration: seconds * 1000,
            panelClass: ['prewrap'],
        })
    }
}
