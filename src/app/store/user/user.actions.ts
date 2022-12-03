import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces";

export const setUser = createAction('SET USER', props<IUser>());
export const restartUser = createAction('UNSET USER');