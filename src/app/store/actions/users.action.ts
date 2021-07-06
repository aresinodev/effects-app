import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

export const loadUsers = createAction('[Users] Load users');
export const loadUsersOK = createAction('[Users] Load users OK', props<{ users: User[] }>());
export const loadUsersKO = createAction('[Users] Load users KO', props<{ payload: any }>());