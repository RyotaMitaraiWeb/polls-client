import { createReducer, on } from "@ngrx/store";
import { open, close } from "./mobile-menu.actions";

export const mobileMenuReducer = createReducer(
    false,
    on(open, () => true),
    on(close, () => false),
)