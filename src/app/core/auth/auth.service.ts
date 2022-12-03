import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestError, IUser, IUserAuth, IUserResponse } from '../../interfaces';

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
        return this.httpClient.post<IUserResponse | IRequestError>(this.url + '/login',
            user,
            {
                headers: {
                    'Authorization': localStorage.getItem('token') as string || '',
                },
                responseType: 'json',

            }
        )
    }

    register(user: IUserAuth) {
        return this.httpClient.post<IUserResponse | IRequestError>(this.url + '/register',
            user,
            {
                headers: {
                    'Authorization': localStorage.getItem('token') as string || '',
                },
                responseType: 'json',

            }
        )
    }

    isLoggedIn() {
        return this.httpClient.post<IUserResponse>(this.url + '/isLogged', {},
            {
                headers: {
                    'Authorization': localStorage.getItem('token') as string || '',
                },
            }
        )
    }
}