import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as userActions from '../actions';

import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions,
                private userSvc: UserService) {}
    loadUser$ = createEffect(
        () => this.actions$
        .pipe(
            ofType(userActions.loadUser),
            mergeMap(
                (action: any) => this.userSvc.getUser(action.id)
                .pipe(
                    map(user => userActions.loadUserOK({ user })),
                    catchError(error => of(userActions.loadUserKO({ payload: error })))
                )
            )
        )
    );
}
