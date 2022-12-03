import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/interfaces";
import { setUser, restartUser } from "./user.actions";

const initialState: IUser = {
    id: 0,
    username: '',
};

export const userReducer = createReducer(
    initialState,
    on(setUser, (_state, user: IUser) => ({
        id: user.id,
        username: user.username,
    })),
    on(restartUser, (_state) => ({
        id: 0,
        username: ''
    }))
);