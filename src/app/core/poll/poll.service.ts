import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPoll, IPollPreview, IPollSubmission, IPollSuccessfulAction } from 'src/app/interfaces';

@Injectable({
    providedIn: 'root'
})
export class PollService {

    constructor(private readonly http: HttpClient) { }

    url: string = 'http://localhost:3000/poll';

    getPoll(id: number) {
        return this.http.get<IPoll>(this.url + '/' + id);
    }

    createPoll(poll: IPollSubmission) {
        return this.http.post<IPollSuccessfulAction>(this.url + '/create', poll);
    }

    editPoll(id: number, title: string) {
        return this.http.patch<IPollSuccessfulAction>(`${this.url}/${id}/edit`, { title });
    }

    deletePoll(id: number) {
        return this.http.delete<{}>(`${this.url}/${id}/delete`);
    }

    vote(pollId: number, choiceId: number) {
        return this.http.post<{ voteId: number }>(`${this.url}/${pollId}/vote/${choiceId}`, {});
    }

    getAllPolls() {
        return this.http.get<IPollPreview[]>(`${this.url}/all`);
    }

    getOwnPolls() {
        return this.http.get<IPollPreview[]>(`${this.url}/own`);
    }

    searchPollsByTitle(title: string) {
        let params = new HttpParams();
        params = params.append('search', title);
        return this.http.get<IPollPreview[]>(`${this.url}`, { params });
    }
}
