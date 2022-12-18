import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestError, IUserAuth, IUserResponse } from '../../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn: boolean = false;
    url: string;

    constructor(private readonly httpClient: HttpClient) {
        this.url = environment.apiUrl + '/user';
    }

    login(user: IUserAuth) {
        return this.httpClient.post<IUserResponse | IRequestError>(this.url + '/login', user);
    }

    register(user: IUserAuth) {
        return this.httpClient.post<IUserResponse | IRequestError>(this.url + '/register', user);
    }

    isLoggedIn() {
        return this.httpClient.post<IUserResponse>(this.url + '/isLogged', {});
    }

    logout() {
        return this.httpClient.delete<{ statusCode: number}>(this.url + '/logout')
    }
}
