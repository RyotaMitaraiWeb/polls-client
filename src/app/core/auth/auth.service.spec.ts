import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IRequestError, IUser, IUserAuth, IUserResponse } from 'src/app/interfaces';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            
            imports: [HttpClientTestingModule]
        });

        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('isLoggedIn', () => {
        it('confirms that user is not logged in', () => {
            const dummyResponse = {
                statusCode: 400,
            };

            service.isLoggedIn().subscribe({
                error(res) {
                    expect(res.statusCode).toBe(400);
                }
            });

            const req = httpMock.expectOne(`${service.url}/isLogged`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });

        it('confirms that user is logged in', () => {
            const dummyResponse: IUserResponse = {
                id: 1,
                username: 'ryota1',
                accessToken: 'a',
            };

            service.isLoggedIn().subscribe(res => {
                expect(res.id).toBe(1);
                expect(res.username).toBe('ryota1');
                expect(res.accessToken).toBe('a');
            });

            const req = httpMock.expectOne(`${service.url}/isLogged`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });
    });

    describe('register', () => {
        it('registers successfully', () => {
            const dummyResponse: IUserResponse = {
                id: 1,
                username: 'ryota1',
                accessToken: 'a',
            };

            const dummyUser: IUserAuth = {
                username: 'ryota1',
                password: '123456',
            };

            service.register(dummyUser).subscribe((res) => {
                res = res as IUserResponse;
                expect(res.id).toBe(1);
                expect(res.username).toBe('ryota1');
                expect(res.accessToken).toBe('a');
            });

            const req = httpMock.expectOne(`${service.url}/register`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });

        it('fails to register an invalid user', () => {
            const dummyResponse: IRequestError = {
                statusCode: 400,
                message: ['username must be longer than or equal to 5 characters']
            };

            const dummyUser: IUserAuth = {
                username: 'a',
                password: '123456',
            };

            service.register(dummyUser).subscribe(res => {
                res = res as IRequestError;
                expect(res.statusCode).toBe(400);
            });

            const req = httpMock.expectOne(`${service.url}/register`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });
    });

    describe('login', () => {
        it('logs in successfully', () => {
            const dummyResponse: IUserResponse = {
                id: 1,
                username: 'ryota1',
                accessToken: 'a',
            };

            const dummyUser: IUserAuth = {
                username: 'ryota1',
                password: '123456',
            };

            service.login(dummyUser).subscribe((res) => {
                res = res as IUserResponse;
                expect(res.id).toBe(1);
                expect(res.username).toBe('ryota1');
                expect(res.accessToken).toBe('a');
            });

            const req = httpMock.expectOne(`${service.url}/login`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });

        it('fails to log in an invalid user', () => {
            const dummyResponse: IRequestError = {
                statusCode: 401,
                message: 'Wrong username or password',
            };

            const dummyUser: IUserAuth = {
                username: 'wrong_username',
                password: 'wrong_password',
            };

            service.login(dummyUser).subscribe(res => {
                res = res as IRequestError;
                expect(res.statusCode).toBe(401);
            });

            const req = httpMock.expectOne(`${service.url}/login`);
            expect(req.request.method).toBe('POST');
            req.flush(dummyResponse);
        });
    })

    afterEach(() => {
        httpMock.verify();
    })
});
