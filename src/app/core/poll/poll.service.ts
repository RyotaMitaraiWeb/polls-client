import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPoll, IPollSubmission, IPollSuccessfulAction } from 'src/app/interfaces';

@Injectable({
    providedIn: 'root'
})
export class PollService {

    constructor(private readonly http: HttpClient) { }

    url: string = 'http://localhost:3000/poll';

    getPoll(id: number) {
        return this.http.get<IPoll>(this.url + '/' + id, {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        });
    }

    createPoll(poll: IPollSubmission) {
        return this.http.post<IPollSuccessfulAction>(this.url + '/create', poll, {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        });
    }

    editPoll(id: number, title: string) {
        return this.http.patch<IPollSuccessfulAction>(`${this.url}/${id}/edit`, { title }, {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        });
    }

    deletePoll(id: number) {
        return this.http.delete<{}>(`${this.url}/${id}/delete`, {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        });
    }

    vote(pollId: number, choiceId: number) {
        return this.http.post<{voteId: number}>(`${this.url}/${pollId}/vote/${choiceId}`, {}, {
            headers: {
                'Authorization': localStorage.getItem('token') as string || '',
            }
        });
    }
}
