import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

export const loadUser = createAction('[User] Load user', props<{ id: string }>());
export const loadUserOK = createAction('[User] Load user OK', props<{ user: User }>());
export const loadUserKO = createAction('[User] Load user KO', props<{ payload: any }>());