export interface IStore {
    menu: boolean;
    user: IUser;
}

export interface IUser {
    id: number;
    username: string;
}

export interface IUserResponse {
    id: number,
    username: string,
    accessToken: string,
}

export interface IUserAuth {
    username: string;
    password: string;
}

export interface IRequestError {
    statusCode: number;
    message: string | string[];
}

export interface IChoice {
    content: string;
}

export interface IVoteCount {
    id: number;
    content: string;
    count: number; 
}

export interface IPoll {
    id: number;
    title: string;
    description: string;
    previousTitles: IPreviousTitle[];
    creationDate: Date;
    updateDate: Date | null;
    author: string;
    isAuthor: boolean;
    voteCount: IVoteCount[];
    hasVoted: boolean;
    voteId: number;
}

export interface IPollSubmission {
    title: string;
    description: string;
    choices: string[];
}

export interface IPollSuccessfulAction {
    id: number;
    statusCode: number;
}

export interface IPreviousTitle {
    id: number;
    title: string;
    date: Date;
}

export interface IPollPreview {
    id: number;
    title: string;
    description: string;
    previousTitles: IPreviousTitle[];
}