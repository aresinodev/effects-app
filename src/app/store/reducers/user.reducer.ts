import { createReducer, on } from '@ngrx/store';

import { loadUser, loadUserOK, loadUserKO } from '../actions';

import { User } from '../../models/user.model';

export interface UserState {
    id: string,
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: UserState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _userReducer = createReducer(userInitialState,

    on(loadUser, (state, { id }) => ({ ...state, loading: true, id })),
    on(loadUserOK, (state, { user }) => ({ ...state, loading: false, loaded: true, user: { ...user } })),
    on(loadUserKO, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message } })),

);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}
