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