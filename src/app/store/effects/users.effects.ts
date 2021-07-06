import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usersActions from '../actions';

import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions,
                private userSvc: UserService) {}

    loadUsers$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(usersActions.loadUsers),
            mergeMap(
                () => this.userSvc.getUsers()
                .pipe(
                    map(users => usersActions.loadUsersOK({ users })),
                    catchError(error => of(usersActions.loadUsersKO({ payload: error })))
                )
            )
        )
    );
}