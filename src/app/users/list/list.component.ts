import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  users!: User[];
  
  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }
}
