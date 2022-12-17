import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestError, IUserAuth, IUserResponse } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn: boolean = false;
    url: string;

    constructor(private readonly httpClient: HttpClient) {
        this.url = 'http://localhost:3000/user';
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
