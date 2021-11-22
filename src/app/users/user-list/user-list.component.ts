import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../user-state.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']

})
export class UserListComponent implements OnInit {


  constructor(public userState: UserStateService){ }

  ngOnInit(): void {
    this.userState.getUsers()
  }


}
