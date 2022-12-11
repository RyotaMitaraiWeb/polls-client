import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IChoice } from 'src/app/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor(private readonly http: HttpClient) { }

    checkIfUserExists(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> => {
            return fetch(this.url + '/' + control.value).then(res => {
                return res.status === 200 ? { usernameExists: true } : null
            });
        }
    }

    checkForDuplicates(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const choices: IChoice[] = control.value;
            const uniqueChoices = new Set(choices.map(choice => choice.content));            
            return choices.length !== uniqueChoices.size ? { duplicates: true } : null;
        }
    }

    hasAtLeastTwoOptions(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const choices: IChoice[] = control.value;
            return choices.length < 2 ? { fewerThanTwoChoices: true } : null;
        }
    }

    url = 'http://localhost:3000/user';
}
