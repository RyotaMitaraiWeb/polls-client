import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService, private readonly router: Router, private readonly snackbar: SnackbarService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isLoggedIn().pipe(map(res => {
            this.snackbar.openSnackbar('You must be logged out to access this page', 'close', 10);
            return this.router.createUrlTree(['/']);
        }), catchError(() => {
            return of(true);
        }));

    }

}
