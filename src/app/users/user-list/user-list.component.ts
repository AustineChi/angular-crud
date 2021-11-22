import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../user-state.service';

@Component({
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {


  constructor(public userState: UserStateService){ }

  ngOnInit(): void {
    this.userState.getUsers()
  }


}
