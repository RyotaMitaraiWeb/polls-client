import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PollService } from 'src/app/core/poll/poll.service';
import { IPoll, IPollPreview } from 'src/app/interfaces';

@Injectable({
    providedIn: 'root'
})
export class AllPollsResolver implements Resolve<IPollPreview[]> {
    constructor(private readonly pollService: PollService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPollPreview[]> {
        return this.pollService.getAllPolls();
    }
}
