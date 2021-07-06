import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import * as userActions from  '../../store/actions';
import { AppState } from '../../store/app.reducers';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  user!: User;
  loading: boolean = false;
  error: any;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(userActions.loadUser({ id }));
    });
  }
}
