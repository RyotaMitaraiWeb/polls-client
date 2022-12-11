import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { PollService } from '../../core/poll/poll.service';
import { IPoll } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class PollResolver implements Resolve<IPoll> {
    constructor(private readonly pollService: PollService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPoll> {
        const id: number = Number(route.paramMap.get('id'));
        this.pollService.getPoll(id).pipe(tap(res => {
            console.log(res);
            
        }))

        return this.pollService.getPoll(id);
    }
}
