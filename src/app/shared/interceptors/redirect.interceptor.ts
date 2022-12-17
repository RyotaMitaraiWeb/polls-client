import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {

    constructor(private readonly router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(() => {},
        (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 404) {
                    this.router.navigate(['/page-not-found']);
                } else if (err.status === 401) {
                    this.router.navigate(['/login']);
                } else if (err.status === 403) {
                    this.router.navigate(['/']);
                }

                return;
            }
        }));
    }
}
