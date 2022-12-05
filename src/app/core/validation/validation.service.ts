import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

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

    url = 'http://localhost:3000/user';
}
