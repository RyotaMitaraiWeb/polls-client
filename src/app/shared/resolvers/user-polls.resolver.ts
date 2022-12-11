import { Injectable } from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PollService } from 'src/app/core/poll/poll.service';
import { IPoll, IPollPreview } from 'src/app/interfaces';

@Injectable({
    providedIn: 'root'
})
export class UserPollsResolver implements Resolve<IPollPreview[]> {
    constructor(private readonly pollService: PollService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPollPreview[]> {
        return this.pollService.getOwnPolls();
    }
}
