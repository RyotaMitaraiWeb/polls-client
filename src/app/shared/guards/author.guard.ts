import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { PollService } from 'src/app/core/poll/poll.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly http: HttpClient,
        private readonly snackbar: SnackbarService
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const id = Number(route.paramMap.get('id'));
        return this.http.get('http://localhost:3000/poll/' + id + '/isAuthor', {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        }).pipe(map(() => {
            
            return true;
        }), catchError((res) => {
            console.log(res);
            this.snackbar.openSnackbar('You must be the author of the poll to perform this action!', 'close', 10);
            return of(this.router.createUrlTree(['/']));
        }));
    }

}
